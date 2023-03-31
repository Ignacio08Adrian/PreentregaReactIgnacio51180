import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemFilter = () => {
  const [producto, setProducto] = useState({});
  const { categoryid } = useParams();

  useEffect(() => {
    fetch(`/itemss.json`)
      .then((response) => response.json())
      .then((data) =>
        setProducto(data.filter((producto) => producto.categoria == categoryid))
      );
  }, [categoryid]);
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.imagen} />
      <p>precio=${producto.price}</p>
      <p>categoria={producto.categoria}</p>
    </div>
  );
};

export default ItemFilter;
