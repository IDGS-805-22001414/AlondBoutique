import React from "react";

function Header({ saludarUsuario }) {
  return (
    <header
      className="text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.5)",
        padding: "60px 20px",
      }}
    >
      <h1
        className="display-3 fw-bold mb-3"
        style={{
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        ✨ Bienvenida a Alond Boutique ✨
      </h1>
      <p
        className="lead mb-4"
        style={{
          maxWidth: "600px",
          fontSize: "1.5rem",
          textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
        }}
      >
        Descubre el estilo que mejor va contigo 💖 — Moda, elegancia y confianza en cada prenda.
      </p>
      <button
        className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow"
        onClick={saludarUsuario}
        style={{
          fontSize: "1.2rem",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        👗 Explorar Moda
      </button>
    </header>
  );
}

export default Header;
