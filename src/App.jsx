import React, { useState } from "react";
import CDPWalletConnect from "./components/CDPWalletconnect";
import GPTAgent from "./components/agent";
import TokenGenerator from "./components/TokenGenerator";
import MilestoneAgent from "./components/MilestoneAgent"; // ✅ Missing import added

function App() {
  const [activeToken, setActiveToken] = useState("");

  return (
    <div style={{ padding: 24 }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          color: "#2c3e50",
          marginBottom: "30px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        💰 CDP + GPT Agent
      </h1>

      {/* 1. Connect CDP Wallet */}
      <CDPWalletConnect />

      {/* 2. Milestone Agent */}
      <MilestoneAgent />

      {/* 3. Token Generator */}
      <TokenGenerator onTokenGenerated={setActiveToken} />

      {/* 4. GPT Agent */}
      <GPTAgent defaultToken={activeToken} />
    </div>
  );
}

export default App;
