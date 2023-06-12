import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";

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
      <Button
        startIcon={<AddShoppingCartIcon />}
        onClick={agregarAlCarrito}
        disabled={cantidad > stock}
      >
        Agregar al carrito
      </Button>
    </div>
  );
}

export default Contador;
