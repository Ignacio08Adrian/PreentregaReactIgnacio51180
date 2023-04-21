import { useState } from "react";

function Contador({ stock, onAgregar }) {
  const [cantidad, setCantidad] = useState(1);

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const agregarAlCarrito = () => {
    onAgregar(cantidad);
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      <span>{cantidad}</span>
      <button onClick={sumar}>+</button>
      <button onClick={agregarAlCarrito} disabled={cantidad > stock}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Contador;
