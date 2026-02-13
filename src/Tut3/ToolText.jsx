import React, { useState } from "react";

const ToolText = () => {
  const [text, setText] = useState("");
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const handleUppercase = () => {
    setText(text.toLocaleUpperCase());
  };
  const handleLowercase = () => {
    setText(text.toLocaleLowerCase());
  };
  const clearAll = () => {
    setText("");
  };
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Tool Texter</h2>
        <p style={styles.subtitle}>Analyze and modify your text</p>
        <textarea
          style={styles.textarea}
          placeholder="type or past your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div style={styles.stats}>
          <div>
            <strong>{wordCount}</strong> <span> Words</span>
          </div>
          <div>
            <strong>{text.length}</strong> <span> Character</span>
          </div>
        </div>
        <div style={styles.actions}>
          <button style={styles.button} onClick={handleUppercase}>
            <span>UPPERCASE</span>
          </button>
          <button style={styles.button} onClick={handleLowercase}>
            <span>lowercase</span>
          </button>
          <button style={styles.clearButton} onClick={clearAll}>
            <span>Clear All</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolText;

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e293b",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    padding: "40px",
  },
  card: {
    width: "50%",
    backgroundColor: "#fff",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
  },
  title: {
    fontSize: "20px",
    color: "#000",
    fontWeight: "500",
    marginBottom: "25px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#000",
    fontWeight: "200",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    height: "300px",
    padding: "15px",
    borderRadius: "10px",
    border: "0.5px solid #e3e3e3",
    outline: "none",
    resize: "none",
    fontSize: "15px",
    marginBottom: "20px",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "#334155",
    fontSize: "12px",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  button: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#6366f2",
    color: "#fff",
    fontSize: "15px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  clearButton: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #4338cb",
    backgroundColor: "transparent",
    color: "#6366f2",
    fontSize: "15px",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
