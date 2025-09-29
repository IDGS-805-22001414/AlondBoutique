import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";

function App() {
  const [carrito, setCarrito] = useState([]);

  function saludarUsuario() {
    alert("¡Hola! Gracias por visitar Alond Boutique 💖");
  }

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
    incrementarContador(1);
  }

  function incrementarContador(cantidad) {
    console.log(`Carrito incrementado en ${cantidad} producto(s).`);
  }



  function pagar(total) {
    let metodo = prompt(
      `El total a pagar es $${total} MXN 💵.\nElige método de pago:\n1️⃣ Tarjeta de crédito\n2️⃣ Efectivo al recibir`
    );

    if (metodo === "1") {
      alert("Pago con tarjeta exitoso. ¡Gracias por tu compra!");
    } else if (metodo === "2") {
      alert("Pagarás en efectivo al repartidor. ¡Gracias por tu compra!");
    } else {
      alert("Método no válido. Intenta de nuevo.");
    }
    setCarrito([]);
  }

  return (
    <div>
      <Navbar totalCarrito={carrito.length} />
      <Header saludarUsuario={saludarUsuario} />
      <Productos agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} pagar={pagar} />
      <Footer />
    </div>
  );
}

export default App;
