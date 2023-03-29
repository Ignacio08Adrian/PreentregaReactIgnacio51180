import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/itemss.json`)
      .then((response) => response.json())
      .then((data) => setProducto(data.find((producto) => producto.id == id)));
  }, [id]);

  return (
    <div className="card">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.imagen} />
      <p>precio=${producto.price}</p>
      <p>genero={producto.genero}</p>
      <p>categoria={producto.categoria}</p>
      <p>resumen={producto.descripcion}</p>
    </div>
  );
};

export default ItemDetailContainer;
