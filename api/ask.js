export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // You can switch to "gpt-4" if needed
        messages: [{ role: "user", content: question }],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await openaiRes.json();
    const answer = data.choices?.[0]?.message?.content?.trim();

    res.status(200).json({ answer });
  } catch (err) {
    console.error("OpenAI Error:", err);
    res.status(500).json({ error: "Failed to get AI response" });
  }
}
