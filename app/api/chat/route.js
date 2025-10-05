export async function POST(req){
  const body = await req.json();
  const { message } = body;

  if (!message) {
    return new Response(JSON.stringify({ error: "message required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.MISTRAL_API_KEY;
  const apiUrl = process.env.MISTRAL_API_URL;
  const model = process.env.MISTRAL_MODEL || "mistral-large-latest";

  const mistralRes = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await mistralRes.json();
  const respMessage = data.choices?.[0]?.message?.content || "No reply"
  return new Response(JSON.stringify({ reply: respMessage }), {
    headers: { "Content-Type": "application/json" },
  });
}