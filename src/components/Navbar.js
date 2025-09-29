import React from "react";

function Navbar({ totalCarrito = 0 }) {
  // 🎨 Estilos reutilizables
  const botonEstilo = {
    background: "#fff",
    color: "#ff69b4",
    border: "none",
    borderRadius: "50px",
    fontSize: "1.5rem",
    padding: "0.4rem 0.8rem",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: "linear-gradient(90deg, #ff69b4, #ffb6c1)",
        padding: "0.8rem 1.5rem",
      }}
    >
      <div className="container-fluid">
        {/* 🏷️ Marca */}
        <a
          className="navbar-brand fw-bold fs-3"
          href="/"
          style={{
            color: "#fff",
            letterSpacing: "1px",
            textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
            textDecoration: "none",
          }}
        >
          👗 Alond Boutique
        </a>

        {/* 🔔 Botón notificaciones / carrito */}
        <div className="d-flex ms-auto">
          <button
            type="button"
            className="btn position-relative"
            style={botonEstilo}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0px 6px 14px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
            }}
          >
            🔔
            {totalCarrito > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{
                  backgroundColor: "#dc3545",
                  fontSize: "0.8rem",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
                }}
              >
                {totalCarrito}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
