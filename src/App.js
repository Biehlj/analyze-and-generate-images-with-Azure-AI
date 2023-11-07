import React, { useState } from "react";
import "./App.css";
import analyzeImage from "./azure-image-analysis";
import generateImage from "./az-img-generate";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [generationResult, setGenerationResult] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleAnalyzeImage = async () => {
    const result = await analyzeImage(imageUrl);
    setAnalysisResult(result);
    setShowResults(true);
  };

  const handleGenerateImage = async () => {
    const result = await generateImage(imageUrl);
    setGenerationResult(result);
    setShowResults(true);
  };

  // Add code to display the analysisResult and generationResult in the UI
  const DisplayResults = () => {
    if (showResults && analysisResult) {
      return (
        <div>
          <h2>Analysis Result</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      );
    } else if (showResults && generationResult) {
      return (
        <div>
          <h2>Generation Result</h2>
          <pre>{JSON.stringify(generationResult, null, 2)}</pre>
        </div>
      );
    } else if (showResults) {
      return (
        <div>
          <h2>No results found</h2>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1 className="title">Image Analysis and Generation</h1>
      <label>
        Image URL:
        <input className="input" type="text" value={imageUrl} onChange={handleImageUrlChange} />
      </label>
      <br />
      <button onClick={handleAnalyzeImage}>Analyze Image</button>
      <button onClick={handleGenerateImage}>Generate Image</button>
      <DisplayResults />
    </div>
  );
}

export default App;
