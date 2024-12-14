import React from "react";

const LogoutForm = ({ onLogout }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "white",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "darkgoldenrod" }}>Czy na pewno chcesz się wylogować?</h2>
      <button
        onClick={onLogout}
        style={{
          backgroundColor: "darkgoldenrod",
          color: "black",
          border: "2px solid black",
          fontWeight: "bold",
          padding: "10px 20px",
        }}
      >
        Wyloguj się
      </button>
    </div>
  );
};

export default LogoutForm;
