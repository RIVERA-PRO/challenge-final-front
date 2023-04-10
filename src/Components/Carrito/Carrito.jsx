import React from "react";

export default function Carrito({ carrito, eliminarDelCarrito }) {


  return (
    <div>
      <h3>Carrito</h3>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        carrito.map((producto) => (
          <div key={producto.id}>
            <p>{producto.title}</p>
            <p>{producto.price}</p>
            <button onClick={() => eliminarDelCarrito(producto)}>
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
}
