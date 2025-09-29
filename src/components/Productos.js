import React from "react";

function Productos({ agregarAlCarrito }) {
  const lista = [
    {
      nombre: "Vestido Floral",
      precio: 799,
      imagen:
        "https://img.ltwebstatic.com/images3_pi/2024/01/15/a4/17052897760cf830af668b61431dd230c328aa2fce_thumbnail_336x.jpg",
    },
    {
      nombre: "Bolso Casual",
      precio: 599,
      imagen:
        "https://belcorpmexico.vtexassets.com/arquivos/ids/932847-800-800?v=638276400480170000&width=800&height=800&aspect=true",
    },
    {
      nombre: "Blusa Elegante",
      precio: 499,
      imagen:
        "https://img.bestdealplus.com/ae04/kf/Hf8fca2dbeffb4ede8f41cbb3256d74984.jpg",
    },
  ];

  return (
    <section className="container my-5">
      <h2
        className="text-center mb-5"
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#ff69b4",
          textShadow: "1px 1px 5px rgba(0,0,0,0.1)",
        }}
      >
        ✨ Nuestros Productos ✨
      </h2>

      <div className="d-flex flex-column align-items-center gap-4">
        {lista.map((producto, i) => (
          <div
            className="card w-75 shadow-lg border-0"
            key={i}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0px 12px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0px 6px 15px rgba(0,0,0,0.1)";
            }}
          >
            {/* Imagen del producto */}
            <div style={{ flex: "0 0 250px" }}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Info del producto */}
            <div
              className="card-body d-flex flex-column justify-content-center text-center"
              style={{ flex: "1" }}
            >
              <h5 className="card-title fw-bold fs-3 mb-3">
                {producto.nombre}
              </h5>
              <p className="card-text fs-4 text-muted mb-4">
                ${producto.precio} MXN
              </p>
              <button
                className="btn btn-lg mx-auto"
                style={{
                  background: "linear-gradient(90deg, #ff69b4, #ffb6c1)",
                  border: "none",
                  borderRadius: "50px",
                  color: "#fff",
                  padding: "0.6rem 2rem",
                  fontSize: "1.1rem",
                  transition: "background 0.3s ease, transform 0.2s ease",
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
                onClick={() => agregarAlCarrito(producto)}
              >
                🛒 Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
