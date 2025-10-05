const handler = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end()

    const { messages } = req.body
    if (!messages || !Array.isArray(messages)) return res.status(400)
                                                    .json({ error: 'messages required' })

    const apiKey = process.env.MISTRAL_API_KEY
    const apiUrl = process.env.MISTRAL_API_URL
    const model = process.env.MISTRAL_MODEL

    if (!apiKey || !apiUrl)  return res
                                .status(500)
                                .json({ error: 'Mistral API key or URL not configured on server' })
    try{
        const payload = {
            model,
            input: messages.map(m => ({ role: m.role, content: m.content })),
            temperature: 0.7,
            max_new_tokens: 512
        }

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify(payload)
        })

        if (!response.ok) {
            const text = await response.text()
            return res.status(response.status).json({ error: text })
        }

        const data = await response.json()
        let assistantText = ''

        if (data.output && typeof data.output === 'string') assistantText = data.output
        else if (data.text) assistantText = data.text
        else if (data.choices && Array.isArray(data.choices) && data.choices[0]?.message?.content) assistantText = data.choices[0].message.content
        else if (data.choices && Array.isArray(data.choices) && data.choices[0]?.text) assistantText = data.choices[0].text
        else assistantText = JSON.stringify(data)

        return res.status(200).json({ assistant: assistantText })
    } 
    catch (err) {
        console.error('proxy error', err)
        return res.status(500)
            .json({ error: err.message || String(err) })
    }
}

export default handler;