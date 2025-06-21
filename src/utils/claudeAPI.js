export const getClaudeResponse = async (prompt) => {
  const lower = prompt.toLowerCase();

  // Joke logic
  if (lower.includes("joke")) {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything! 🤣",
      "How does a penguin build its house? Igloos it together. ❄️",
      "Why did the developer go broke? Because they used up all their cache. 💸"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  if (lower.includes("youtube")) {
    return "YouTube is a video-sharing platform owned by Google. 🎥";
  }

  if (lower.includes("what is a pen")) {
    return "A pen is a tool used for writing with ink. ✒️";
  }

  if (lower.includes("capital") && lower.includes("india")) {
    return "The capital of India is New Delhi. 🇮🇳";
  }

  if (lower.includes("html")) {
    return "HTML is the standard markup language for creating web pages.";
  }

  const now = new Date();
  if (lower.includes("time")) return `⏰ Current time: ${now.toLocaleTimeString()}`;
  if (lower.includes("date")) return `📅 Today's date is: ${now.toLocaleDateString()}`;
  if (lower.includes("day")) return `🗓️ Today is: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`;
  if (lower.includes("month")) return `📆 Current month: ${now.toLocaleDateString('en-US', { month: 'long' })}`;

  return `🤖 You asked: "${prompt}". I’m a demo Claude 3 agent. Try asking a joke or time/date!`;
};
