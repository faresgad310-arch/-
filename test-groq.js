async function run() {
    const apiKey = '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';
    const data = {
        model: "openai/gpt-oss-120b",
        messages: [
            { role: "user", content: "قل مرحبا فقط" }
        ],
        temperature: 0.7
    };

    console.log("Testing Groq...");
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        const err = await response.text();
        console.error("Groq Error:", err);
    } else {
        const json = await response.json();
        console.log("Groq Success:", json.choices[0].message.content);
    }
}
run();
