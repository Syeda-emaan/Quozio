import React, { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

function App() {
  const { theme } = useContext(ThemeContext);

  const [textInput, setTextInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  
  const [quotesList, setQuotesList] = useState([
    {
      id: 1,
      text: "The problem is people are being hated when they are real, and are being loved when they are fake.",
      author: "Bob Marley"
    },
    {
      id: 2,
      text: "Success and inspiration come from daily consistent effort.",
      author: "Maya Angelou"
    }
  ]);

  const handleCreateQuote = (e) => {
    e.preventDefault();
    if (textInput.trim() === "") return;

    const newQuote = {
      id: Date.now(),
      text: textInput,
      author: authorInput.trim() === "" ? "Anonymous" : authorInput
    };

    setQuotesList([newQuote, ...quotesList]);
    setTextInput("");
    setAuthorInput("");
  };

  return (
    <div className={`app-container ${theme}`}>
      <header className="navbar">
        <div className="logo-brand">
          <svg className="brand-svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.84.5 3.56 1.37 5.03L2.45 21.55l4.62-0.91C8.5 21.5 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/>
          </svg>
          <span className="brand-name">Quozio Clone</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="main-content">
        <div className="form-card">
          <h2>Create Your Quote</h2>
          <form onSubmit={handleCreateQuote}>
            <textarea
              placeholder="Enter your quote..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              rows="3"
              required
            />
            <input
              type="text"
              placeholder="Who said it? (Optional)"
              value={authorInput}
              onChange={(e) => setAuthorInput(e.target.value)}
            />
            <button type="submit" className="create-btn">
              Create My Quote
            </button>
          </form>
        </div>

        <div className="preview-section">
          <h3>Generated Quotes Feed</h3>
          <div className="quotes-grid">
            {quotesList.map((item) => (
              <div key={item.id} className="quote-preview-box">
                <div className="quote-inner">
                  <p className="preview-text">"{item.text}"</p>
                  <span className="preview-author">— {item.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;