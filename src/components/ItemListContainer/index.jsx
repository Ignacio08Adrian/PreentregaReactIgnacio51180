import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Item.css";
import { ItemList } from "../ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const Filtrado = async () => {
    const response = await fetch(`/itemss.json`);
    await response.json().then((data) => {
      if (id) {
        const filtro = data.filter((producto) => producto.categoria === id);
        setProductos(filtro);
      } else {
        setProductos(data);
      }
    });
  };

  useEffect(() => {
    Filtrado();
  });

  return (
    <div>
      <div className="flexs">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
