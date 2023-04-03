import Card from "../card/index";

export const ItemList = ({ productos }) => {
  return (
    <div className="flexs">
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
