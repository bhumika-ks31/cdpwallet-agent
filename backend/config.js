const axios = require('axios');

// 🔐 Replace these with your actual test keys
const CDP_WALLET_KEY = "test_xyz";
const CDP_BASE_URL = "https://api.cdpwallet.com"; // Sample

async function sendPayout(to, amount) {
  // 🪙 Mocked payout for now (replace with real API call)
  console.log(`Pretend to send ${amount} ETH to ${to}`);

  // If using real CDP:
  /*
  await axios.post(`${CDP_BASE_URL}/send`, {
    to, amount
  }, {
    headers: { Authorization: `Bearer ${CDP_WALLET_KEY}` }
  });
  */
}

module.exports = { sendPayout };
