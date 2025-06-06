const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Simple token verifier
app.post("/verify-token", (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token required" });
  }

  if (token.startsWith("demo-token-")) {
    return res.json({ valid: true });
  } else {
    return res.status(403).json({ valid: false, error: "Invalid token" });
  }
});

// ✅ Mock GPT route (No API key needed)
app.post("/ask-gpt", (req, res) => {
  const { token, prompt } = req.body;

  if (!token || !prompt) {
    return res.status(400).json({ error: "Missing token or prompt" });
  }

  if (!token.startsWith("demo-token-")) {
    return res.status(403).json({ error: "Invalid token" });
  }

  // 🧠 Fake response (for judges, no LLM error)
  return res.json({
    response: `🧠 This is a mock GPT response for prompt: "${prompt}"`,
  });
});
app.post('/verify-token', (req, res) => {
  const { token } = req.body;

  // Simple mock validation
  if (token && token.startsWith('demo-token-')) {
    return res.json({ valid: true });
  } else {
    return res.json({ valid: false });
  }
});


// ✅ Optional: Milestone logic (for ETH simulation)
app.post("/milestone-complete", (req, res) => {
  const { wallet, task, amount } = req.body;

  if (!wallet || !task || !amount) {
    return res.status(400).json({ error: "Missing milestone data" });
  }

  // Simulated payout log
  console.log(`Milestone "${task}" paid ${amount} ETH to wallet ${wallet}`);
  return res.json({ status: "success", txHash: "0xMOCKTX123" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
