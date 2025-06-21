import React, { useState } from 'react';
import { getClaudeResponse } from '../utils/claudeAPI';

const GPTAgent = () => {
  const [token, setToken] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateToken = () => {
    const newToken = 'demo-token-' + Math.random().toString(36).substring(2, 10);
    setToken(newToken);
    addMessage('system', '✅ Token generated! Ask me anything powered by Claude 3 (Bedrock demo).');
  };

  const addMessage = (role, content) => {
    setMessages(prev => [...prev, { role, content }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userPrompt = input;
    addMessage('user', userPrompt);
    setInput('');
    setLoading(true);

    try {
      const reply = await getClaudeResponse(userPrompt);
      addMessage('assistant', reply);
    } catch (Error) {
      addMessage('assistant', '❌ Error generating response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>🤖 Claude 3 Agent (Amazon Bedrock)</h2>

      {!token ? (
        <button
          onClick={generateToken}
          style={{
            padding: '10px 20px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Generate Token
        </button>
      ) : (
        <>
          <div style={{ margin: '10px 0' }}>
            <strong>Active Token:</strong> <code>{token}</code>
          </div>

          <div style={{
            height: '300px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            padding: '10px',
            overflowY: 'auto',
            backgroundColor: '#fefefe',
            marginBottom: '15px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                textAlign: msg.role === 'user' ? 'right' : 'left',
                margin: '6px 0'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '10px 14px',
                  background: msg.role === 'user' ? '#d6ecff' : '#f1f1f1',
                  borderRadius: '8px',
                  maxWidth: '80%',
                  wordBreak: 'break-word'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ textAlign: 'left', fontStyle: 'italic', color: '#777' }}>
                Claude 3 is typing<span className="dots">...</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question here..."
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '10px'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                background: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default GPTAgent;
