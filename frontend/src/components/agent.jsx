import React, { useState } from 'react';

const GPTAgent = () => {
  const [token, setToken] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Generate token
  const generateToken = () => {
    const newToken = 'demo-token-' + Math.random().toString(36).substring(2, 10);
    setToken(newToken);
    addMessage('system', '✅ Token generated! Ask me anything - facts, jokes, calculations, or general knowledge.');
  };

  // Add messages to chat
  const addMessage = (role, content) => {
    setMessages(prev => [...prev, { role, content }]);
  };

  // Handle user submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    addMessage('user', input);

    // Process input and generate response
    const processedInput = input.toLowerCase();
    let response;

    // Knowledge responses
    if (processedInput.includes('capital') && processedInput.includes('india')) {
      response = 'The capital of India is New Delhi. 🇮🇳';
    } 
    else if (processedInput.includes('capital') && processedInput.includes('france')) {
      response = 'The capital of France is Paris. 🇫🇷';
    }
    else if (processedInput.includes('capital') && processedInput.includes('japan')) {
      response = 'The capital of Japan is Tokyo. 🇯🇵';
    }
    else if (processedInput.includes('population') && processedInput.includes('india')) {
      response = 'As of 2023, India\'s population is approximately 1.43 billion people. 🌍';
    }
    else if (processedInput.includes('largest planet')) {
      response = 'Jupiter is the largest planet in our solar system. 🪐';
    }
    else if (processedInput.includes('tallest mountain')) {
      response = 'Mount Everest is the tallest mountain above sea level at 8,848 meters. ⛰️';
    }
    
    // Math calculations
    else if (processedInput.includes('+') || processedInput.includes('plus')) {
      const nums = input.match(/\d+/g);
      if (nums && nums.length >= 2) {
        const sum = nums.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        response = `The sum is ${sum}. ➕`;
      }
    }
    else if (processedInput.includes('-') || processedInput.includes('minus')) {
      const nums = input.match(/\d+/g);
      if (nums && nums.length >= 2) {
        const diff = nums[0] - nums[1];
        response = `The difference is ${diff}. ➖`;
      }
    }
    else if (processedInput.includes('*') || processedInput.includes('x') || processedInput.includes('times')) {
      const nums = input.match(/\d+/g);
      if (nums && nums.length >= 2) {
        const product = nums[0] * nums[1];
        response = `The product is ${product}. ✖️`;
      }
    }
    
    // Jokes
    else if (processedInput.includes('joke')) {
      const jokes = [
        'Why did the scarecrow win an award? Because he was outstanding in his field! 😄',
        'What do you call a fake noodle? An impasta! 🍝',
        'How do you organize a space party? You planet! 🚀',
        'Why don\'t skeletons fight each other? They don\'t have the guts! 💀',
        'What did one ocean say to the other ocean? Nothing, they just waved. 🌊'
      ];
      response = jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    // Greetings
    else if (processedInput.includes('hello') || processedInput.includes('hi') || processedInput.includes('hey')) {
      response = 'Hello there! How can I assist you today? 😊';
    }
    else if (processedInput.includes('thank')) {
      response = 'You\'re welcome! Is there anything else I can help with? 😊';
    }
    
    // Time/date
    else if (processedInput.includes('time') || processedInput.includes('date')) {
      const now = new Date();
      response = `Current date and time is: ${now.toLocaleString()}. ⏰`;
    }
    
    // Default response if no specific match
    else {
      const defaultResponses = [
        `I understand you're asking about "${input}". Can you be more specific?`,
        `Interesting question about "${input}"! I'm a demo AI with limited knowledge.`,
        `Thanks for your message: "${input}". What else would you like to know?`,
        `I've noted your query about "${input}". Is there something specific you need?`
      ];
      response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    addMessage('assistant', response);
    setInput('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>🤖 Enhanced GPT Agent</h2>

      {!token ? (
        <button 
          onClick={generateToken}
          style={{
            padding: '10px 15px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Generate Token
        </button>
      ) : (
        <div>
          <div style={{ marginBottom: '10px' }}>
            <strong>Active Token:</strong> <code>{token}</code>
          </div>

          <div style={{
            height: '300px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '10px',
            overflowY: 'auto',
            marginBottom: '10px',
            backgroundColor: '#f9f9f9'
          }}>
            {messages.map((msg, i) => (
              <div 
                key={i} 
                style={{
                  textAlign: msg.role === 'user' ? 'right' : 'left',
                  margin: '5px 0'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '8px 12px',
                  background: msg.role === 'user' ? '#e3f2fd' : '#f5f5f5',
                  borderRadius: '8px',
                  maxWidth: '80%',
                  wordBreak: 'break-word'
                }}>
                  {msg.content.split('\n').map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                marginBottom: '10px'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '8px 15px',
                background: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GPTAgent;