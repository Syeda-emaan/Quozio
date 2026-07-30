import React, { useState } from "react";

const quotesData = [
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
  { text: "Programs must be written for people to read.", author: "Harold Abelson" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" }
];

function QuoteCard() {
  const [quote, setQuote] = useState(quotesData[0]);
  const [copied, setCopied] = useState(false);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
    setCopied(false);
  };

  const copyQuote = () => {
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card">
      <div className="quote-box">
        <p className="quote-text">"{quote.text}"</p>
        <span className="quote-author">— {quote.author}</span>
      </div>

      <div className="btn-group">
        <button className="primary-btn" onClick={getRandomQuote}>
          New Quote
        </button>
        <button className="secondary-btn" onClick={copyQuote}>
          {copied ? "Copied! ✅" : "Copy Quote"}
        </button>
      </div>
    </div>
  );
}

export default QuoteCard;