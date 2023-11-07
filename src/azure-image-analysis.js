export default async function analyzeImage(imageUrl) {
  const endpoint = process.env.AZURE_AI_ENDPOINT;
  const subscriptionKey = process.env.AZURE_AI_KEY;
  const features = 'read,caption';
  const apiUrl = `${endpoint}/computervision/imageanalysis:analyze?features=${features}&model-version=latest&language=en&api-version=2023-02-01-preview`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey
    },
    body: JSON.stringify({ url: imageUrl })
  });

  return response.json();
}
