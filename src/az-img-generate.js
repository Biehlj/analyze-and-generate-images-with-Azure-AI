const openaikey = process.env.OPENAI_API_KEY;

export default async function generateImage(prompt) {
    const headers = {
        Authorization: `Bearer ${openaikey}`,
        "Content-Type": "application/json",
    }
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations",{
            method: "POST",
            model: "dall-e-2",
            headers: headers,
            body: JSON.stringify({
                prompt: prompt,
                n: 1,
                size: "1024x1024"
            }),
        });

        const json = await response.json();
        console.log(json);
        const imageURL = json.data[0].url;

        return {"prompt": prompt, "imageURL": imageURL};
    }catch (error) {
        console.log(error);
        return {"prompt": prompt, "imageURL": null};
    }
}