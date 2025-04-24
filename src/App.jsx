// App.jsx
import React from "react";
import "./App.css";

const links = [
  { title: "home 🏠", description: "my main site", url: "https://anishnagula.me" },
  { title: "resume 📄", description: "my pdf resume, updated(ish)", url: "https://anishnagula.me/resume" },
  { title: "quickbang ⚡", description: "search engine + bangs", url: "https://quickbang.netlify.app" },
  { title: "say hi 👋", description: "contact or just vibe", url: "mailto:anish.nagula@gmail.com" },
];


export default function App() {
  return (
    <div className="container">
      <h1 className="intro">hi, i'm an1.</h1>
      <p className="subtitle">
        i build things no one asked for —<br />
        and somehow, they work (usually).
      </p>
      <div className="link-list">
        {links.map((link, idx) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="card" key={idx}>
            <h2>{link.title}</h2>
            <p>{link.description}</p>
          </a>
        ))}
      </div>
      <footer>
        <a href="https://github.com/anishNagula" target="_blank" rel="noopener noreferrer">GitHub</a>
        •
        <a href="https://www.instagram.com/anishnagula" target="_blank" rel="noopener noreferrer">Instagram</a>
        •
        <a href="https://buymeacoffee.com/anishnagula" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a>
      </footer>
    </div>
  );
}
