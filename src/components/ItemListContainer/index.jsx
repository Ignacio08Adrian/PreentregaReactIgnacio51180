import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Item.css";
import { ItemList } from "../ItemList";
import db from "../../../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  const Filtrado = async () => {
    const juegosRef = collection(db, "juegos");
    const juegosSnapshot = await getDocs(juegosRef);
    const juegosData = juegosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (id) {
      const filtro = juegosData.filter((producto) => producto.categoria == id);
      setProductos(filtro);
    } else {
      setProductos(juegosData);
    }
    setCargando(false);
  };

  useEffect(() => {
    Filtrado();
  }, [id]);

  return (
    <div>
      {cargando ? (
        <p className="cargar">Cargando productos...</p>
      ) : (
        <div className="flexs">
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
