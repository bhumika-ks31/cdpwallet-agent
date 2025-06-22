# 💰 CDP Wallet + GPT Agent

A milestone-based crypto AI agent combining:

- **CDP Wallet** – for programmable milestone payouts  
- **x402pay** – for token-gated access  
- **Amazon Bedrock (Claude 3 Sonnet)** – for GenAI responses  

Built for GenAI + CDP Wallet Hackathon 🚀

---

## 🚀 Features

- 🎟️ Token generation via **x402pay**
- 💬 Claude 3 Sonnet (via Amazon Bedrock) for smart assistant replies
- 💰 CDP Wallet API integration for **milestone-based payments**
- ✅ Clear UI with dynamic Paid/Unpaid state transitions
- 🔐 No manual `.env` key setup – seamless embedded logic
- ⚡ Fully responsive & production-ready

---

## 🧠 Core Logic

- 🧩 **3 Milestones** shown as cards
- Each milestone has a **Pay** button
- CDP Wallet processes payment & updates state to `Paid Successfully`
- GPT/Claude assistant only activates after token validation (via x402pay)

---

## 🎥 Demo Video

👉 [Watch Demo on Loom](https://www.loom.com/share/c98ffb9548c6462b882d73d8656f9932?sid=fe7969f3-e1f0-47dc-a84d-7bb18a69eb75)

---

## 🤖 GenAI: Amazon Bedrock

This project uses **Amazon Bedrock** with **Claude 3 Sonnet** model for real-time, intelligent responses.

- Integrated via AWS SDK (`@aws-sdk/client-bedrock-runtime`)
- Supports structured JSON output + voice responses (text-to-speech)
- Handles special logic like “get date”, “get time”, etc.

---

## 🛠 Tech Stack

| Frontend          | Backend                | AI + Blockchain       |
|-------------------|------------------------|------------------------|
| React + Vite      | Node.js + Express      | Amazon Bedrock (Claude) |
| TailwindCSS       | MongoDB + JWT Auth     | CDP Wallet API        |
| Shadcn/UI         | Cloudinary (uploads)   | x402pay (token gate)  |

---

## 📦 Local Setup

```bash
git clone <your-repo-url>
cd cdpwallet
npm install
npm run dev

