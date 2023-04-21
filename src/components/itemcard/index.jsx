import "./card.css";
import { useCartContext } from "../../context/cartcontext";

const ItemCard = ({ producto }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="bonito">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        width="250"
        height="200"
      />
      <div className="flexso">
        <p>titulo: {producto.nombre}</p>
        <p>cantidad: {producto.cantidad}</p>
        <p>precio u: {producto.price}</p>
        <p>subtotal: {producto.cantidad * producto.price}</p>
        <button onClick={() => removeProduct(producto.id)}>eliminar</button>
      </div>
    </div>
  );
};

export default ItemCard;
