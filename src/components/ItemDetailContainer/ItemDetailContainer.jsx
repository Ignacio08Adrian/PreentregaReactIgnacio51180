import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import Contador from "../button";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../db/firebase-config";
import { useCartContext } from "../../context/cartcontext";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productoEncontrado, setProductoEncontrado] = useState(true);
  const { id } = useParams();
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const getItem = async () => {
    const itemDoc = doc(db, "juegos", id);
    const juego = await getDoc(itemDoc);
    if (juego.exists()) {
      setProducto(juego.data());
      setProductoEncontrado(true);
    } else {
      setProductoEncontrado(false);
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    setGoToCart(true);
    addProduct(producto, cantidad);
  };

  return (
    <>
      {!producto ? (
        <div className="grandFont">Cargando</div>
      ) : (
        <>
          {!productoEncontrado ? (
            <div className="grandFont">No se encontró el producto</div>
          ) : (
            <div className="padd">
              <div className="card">
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen} alt={producto.imagen} />
                <p>precio=${producto.price}</p>
                <p>genero={producto.genero}</p>
                <p>categoria={producto.categoria}</p>
                <p>resumen={producto.descripcion}</p>
                {goToCart ? (
                  <Link to="/cart">terminar compra</Link>
                ) : (
                  <Contador stock={5} onAgregar={agregarAlCarrito} />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
