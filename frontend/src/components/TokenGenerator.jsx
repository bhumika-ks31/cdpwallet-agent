import React, { useState } from 'react';

const Token = () => {
  const [token, setToken] = useState('');
  const [copied, setCopied] = useState(false);

  const generateToken = () => {
    const newToken = 'demo-token-' + Math.random().toString(36).substring(2, 10);
    setToken(newToken);
    setCopied(false);
  };

  const copyToken = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#f7f9fc',
  }}


    >
      <div
        style={{
          padding: '30px',
          border: '1px solid #ddd',
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          width: '100%',
          maxWidth: '500px',
          textAlign: 'center',
        }}
       

      >
        <h3 style={{ marginBottom: '20px' }}>🎟️  Token Generator</h3>
        <button
          onClick={generateToken}
          style={{
            padding: '10px 20px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '20px',
          }}
        >
          Generate Token
        </button>

        {token && (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                marginBottom: '10px',
              }}
            >
              <strong>Your Token:</strong>
              <code
                style={{
                  background: '#f0f0f0',
                  padding: '6px 10px',
                  borderRadius: '6px',
                }}
              >
                {token}
              </code>
              <button
                onClick={copyToken}
                style={{
                  padding: '6px 12px',
                  background: copied ? '#4CAF50' : '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p style={{ fontSize: '13px', color: '#666' }}>
              ℹ️ This is a demo token - no real API access needed
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Token;
