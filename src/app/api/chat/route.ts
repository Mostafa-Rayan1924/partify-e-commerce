import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000/",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct",
          messages: [{ role: "user", content: message }],
        }),
      }
    );

    if (!response.ok) {
      console.error("API Response Error:", response.statusText);
      throw new Error("API request failed");
    }

    const data = await response.json();
    res.status(200).json({ response: data.choices[0].message.content });
  } catch (err: any) {
    console.error("OpenRouter API error:", err);
    res
      .status(500)
      .json({ error: "Something went wrong", details: err.message });
  }
}
