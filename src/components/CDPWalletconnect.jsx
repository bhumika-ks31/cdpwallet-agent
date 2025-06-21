import React, { useState } from "react";

export default function CDPWalletConnect() {
  const [paidCards, setPaidCards] = useState([false, false, false]);
  const tokens = [
    "demo-token-a1b2c3d4",
    "demo-token-e5f6g7h8",
    "demo-token-i9j0k1l2",
  ];

  const handlePay = (index) => {
    const updated = [...paidCards];
    updated[index] = true;
    setPaidCards(updated);
  };

  return (
    <div
      style={{
        minHeight: "30vh", // reduced height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        backgroundColor: "#fefefe",
        paddingTop: "20px", // tighter top
      }}
    >
      <h2 style={{ marginBottom: "20px", fontSize: "26px", color: "#333" }}>
        💼 CDP Wallet Access
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "300px", // spacing between cards
          flexWrap: "nowrap",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              border: "3px solid #ddd",
              borderRadius: "15px",
              padding: "30px",
              width: "220px",
              backgroundColor: "#fafafa",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              textAlign: "center",
              transition: "0.3s ease",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#222" }}>
              💳 Milestone #{i + 1}
            </h3>
            <p style={{ fontSize: "14px", wordBreak: "break-word" }}>
              <strong>🔑 Token:</strong><br />
              <code>{tokens[i]}</code>
            </p>

            {paidCards[i] ? (
              <p
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginTop: "16px",
                }}
              >
                ✅ Paid Successfully
              </p>
            ) : (
              <button
                onClick={() => handlePay(i)}
                style={{
                  marginTop: "16px",
                  padding: "8px 16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Pay Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
