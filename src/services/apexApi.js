import PromptModifier from '../components/apex/PromptModifier'; // Inject persona tone

const PROXY_API_URL = 'http://localhost:5000/api/apex';

export const FREE_MODEL_OPTIONS = ['gemini-1.5-flash-latest'];
const FREE_MODEL_ID = 'gemini-1.5-flash-latest';

/**
 * Fetch a response from Ape-X (Gemini backend)
 * @param {Array} messages - Chat history [{ role, content, modeAtTime }]
 * @param {string} currentMode - Current active persona mode
 */
export async function fetchApeXResponse(messages = [], currentMode = 'primordialClarity') {
  if (!Array.isArray(messages) || messages.length === 0) {
    console.warn("⚠️ Empty or malformed messages array sent to Ape-X.");
    return {
      text: "⚠️ No messages provided to the Sacred One.",
      tokensUsedCount: 0
    };
  }

  // Find the latest user message
  const latestUserMessage = messages.findLast(msg => msg.role === 'user');
  if (!latestUserMessage) {
    return {
      text: "⚠️ No user message found in conversation history.",
      tokensUsedCount: 0
    };
  }

  // 👇 Track previous mode to detect transitions
  let prevMode = null;

  const geminiFormattedMessages = messages.map((msg, index) => {
    const isUser = msg.role === 'user';
    const modeNow = msg.modeAtTime || currentMode;

    // Determine whether to inject PromptModifier (first message or mode switch)
    const shouldInjectPrompt = isUser && (index === 0 || prevMode !== modeNow);

    let finalText;

    if (shouldInjectPrompt) {
      const injectedPrompt = PromptModifier(msg.content, modeNow);
      finalText = `${injectedPrompt}\n\nUser: ${msg.content}`;
    } else {
      finalText = msg.content;
    }

    prevMode = modeNow;

    return {
      role: msg.role,
      parts: [{ text: finalText }]
    };
  });

  const payload = {
    contents: geminiFormattedMessages,
    generationConfig: {
      temperature: 0.7,
      topP: 0.95
    }
  };

  console.log("📝 Payload to Ape-X (Gemini):", JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(PROXY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("❌ Ape-X backend error:", errText);
      throw new Error("Bad backend response");
    }

    const result = await response.json();
    console.log("✅ Ape-X raw response:", result);

    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    return {
      text: text?.trim() || "⚠️ The Sacred One spoke in riddles. Try again later.",
      tokensUsedCount: result.usageMetadata?.totalTokens || 0
    };

  } catch (error) {
    console.error("🧨 Ape-X fetch error:", error);
    return {
      text: "⚠️ The Sacred One is momentarily silent. Please try again.",
      tokensUsedCount: 0
    };
  }
}

