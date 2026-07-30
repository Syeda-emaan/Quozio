import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div 
      onClick={toggleTheme} 
      style={{
        width: "80px",
        height: "38px",
        backgroundColor: theme === "dark" ? "#1a1a1a" : "#d1d5db",
        borderRadius: "50px",
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "4px",
        boxShadow: theme === "dark" 
          ? "inset 3px 3px 6px rgba(0,0,0,0.8), inset -3px -3px 6px rgba(255,255,255,0.05)"
          : "inset 3px 3px 6px rgba(0,0,0,0.15), inset -3px -3px 6px rgba(255,255,255,0.8)",
        transition: "background-color 0.3s ease"
      }}
    >
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 8px",
        fontSize: "14px",
        position: "absolute",
        zIndex: 1,
        userSelect: "none"
      }}>
        <span>☀️</span>
        <span>🌙</span>
      </div>

      <div style={{
        width: "30px",
        height: "30px",
        backgroundColor: theme === "dark" ? "#2a2a2a" : "#ffffff",
        borderRadius: "50%",
        position: "absolute",
        top: "4px",
        left: "4px",
        transform: theme === "light" ? "translateX(42px)" : "translateX(0px)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        transition: "transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.3s ease",
        zIndex: 2
      }} />
    </div>
  );
}

export default ThemeToggle;