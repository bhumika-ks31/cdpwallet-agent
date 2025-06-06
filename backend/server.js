const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let milestones = [
  {
    id: 1,
    title: "Design Landing Page",
    amount: "0.2",
    address: "0x1234567890abcdef1234567890abcdef12345678",
    status: "pending",
  },
  {
    id: 2,
    title: "Integrate CDP Wallet",
    amount: "0.4",
    address: "0xabcdef1234567890abcdef1234567890abcdef12",
    status: "pending",
  },
  {
    id: 3,
    title: "Deploy Final Agent",
    amount: "0.3",
    address: "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    status: "pending",
  },
];

// GET /milestones - List all milestones
app.get('/milestones', (req, res) => {
  res.json(milestones);
});

// POST /milestones/complete - Mark milestone as paid
app.post('/milestones/complete', (req, res) => {
  const { id } = req.body;
  const milestone = milestones.find(m => m.id === id);
  if (!milestone) {
    return res.status(404).json({ error: "Milestone not found" });
  }

  milestone.status = 'paid';

  console.log(`✅ Sent ${milestone.amount} ETH to ${milestone.address} (CDP Wallet simulation)`);

  return res.json({ success: true, message: 'Milestone marked as paid' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
