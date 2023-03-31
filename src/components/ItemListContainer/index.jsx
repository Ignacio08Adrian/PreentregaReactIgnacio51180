import "./Item.css";
import Card from "../card";

const ItemListContainer = ({ productos }) => {
  return (
    <div>
      <div className="flexs">
        {productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
