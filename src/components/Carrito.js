import React from "react";

function Carrito({ carrito, pagar }) {
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <section className="container my-5">
      <div
        className="p-5 shadow-lg"
        style={{
          background: "#fff",
          borderRadius: "25px",
          boxShadow: "0px 8px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: "#ff69b4",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textShadow: "1px 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          🛍️ Carrito de compras
        </h2>

        {carrito.length === 0 ? (
          <p
            className="text-center fs-5"
            style={{ color: "#777", marginTop: "2rem" }}
          >
            Tu carrito está vacío 💔
          </p>
        ) : (
          <>
            <ul className="list-group mb-4">
              {carrito.map((item, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center border-0 shadow-sm mb-3"
                  style={{
                    borderRadius: "15px",
                    padding: "1rem 1.5rem",
                    background: "#ffe4f2",
                  }}
                  key={index}
                >
                  <span className="fw-bold">{item.nombre}</span>
                  <span className="text-success fw-semibold">
                    ${item.precio} MXN
                  </span>
                </li>
              ))}
            </ul>

            <h4 className="text-end mb-4 fs-4">
              Total a pagar:{" "}
              <strong style={{ color: "#ff69b4" }}>${total} MXN</strong>
            </h4>

            <div className="text-end">
              <button
                className="btn btn-lg"
                style={{
                  background:
                    "linear-gradient(90deg, #ff69b4, #ffb6c1)",
                  border: "none",
                  borderRadius: "50px",
                  color: "#fff",
                  padding: "0.7rem 2.5rem",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  transition: "transform 0.2s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #ff85c1, #ff99c8)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background =
                    "linear-gradient(90deg, #ff69b4, #ffb6c1)";
                  e.target.style.transform = "scale(1)";
                }}
                onClick={() => pagar(total)}
              >
                💳 Pagar ahora
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Carrito;
