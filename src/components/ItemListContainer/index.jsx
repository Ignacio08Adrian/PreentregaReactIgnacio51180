import "./Item.css";
import Card from "../card";

const ItemListContainer = ({ productos }) => {
  console.log(productos);
  return (
    <div className="flexs">
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemListContainer;
