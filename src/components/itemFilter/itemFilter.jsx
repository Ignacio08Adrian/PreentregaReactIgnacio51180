import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`/items.json`)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setItems(data);
      });
  }, []);

  function buscarTripleHandler(category) {
    const FiltrarTripleA = productos.filter(producto);
  }

  return;
  <div></div>;
};

export default ItemListContainer;
