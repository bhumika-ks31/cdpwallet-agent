# 💰 CDP Wallet + GPT Agent

This is a milestone-based crypto agent that combines **CDP Wallet** (for programmable payments) with **x402pay** (for token gating) and **GPT-4** (for smart responses).

## 🚀 Features

- 🎟️ Token generation (via x402pay)
- 💬 GPT-4 agent that responds to user prompts with token validation
- 💰 CDP Wallet logic for milestone-based payouts
- ✅ Clear UI for paid/unpaid states
- 🔐 No manual API keys needed — all flows are integrated

## 🎥 Video Demo

👉 [Watch the Demo Here](https://www.loom.com/share/333fd3081be245b58d592c113d42d0d5?sid=dbdb9ad8-8bd2-4465-bb95-7db15c564f3a )

## 🧠 Logic

- Milestones are shown as 3 cards.
- Each card includes a **Pay** button using the CDP Wallet API.
- When clicked, the wallet sends funds and updates the UI to **Paid Successfully**.
- GPT agent only works with a valid token (gated via x402pay).

## 🛠 Setup

```bash
git clone <your-repo>
cd project
npm install
npm run dev
