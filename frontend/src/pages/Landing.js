import React, { useState } from "react";
import "./Landing.css";

function Landing() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "landing dark" : "landing light"}>

      {/* Navbar */}
      <div className="navbar">
        <h2 className="logo">AI Copilot</h2>

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>AI Career Copilot 🚀</h1>
        <p>
          Analyze your resume with AI and boost your chances of getting hired.
        </p>
        <button className="btn">Get Started</button>
      </div>

      {/* Features */}
      <div className="features">
        <div className="card">
          <h3>📄 Resume Analysis</h3>
          <p>Upload your resume and get instant AI feedback.</p>
        </div>

        <div className="card">
          <h3>📊 Score System</h3>
          <p>Get a smart score based on your resume quality.</p>
        </div>

        <div className="card">
          <h3>🤖 AI Suggestions</h3>
          <p>Improve your resume with AI-powered tips.</p>
        </div>
      </div>

    </div>
  );
}

export default Landing;