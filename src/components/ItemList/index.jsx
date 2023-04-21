import { Link } from "react-router-dom";
import "./itemlist.css";

export const ItemList = ({ productos }) => {
  return (
    <div className="flexs">
      {productos.map((producto) => (
        <div className="flexs">
          <div className="card">
            <Link key={producto.id} to={`/item/${producto.id}`}>
              <h3>{producto.nombre}</h3>
              <img src={producto.imagen} alt={producto.imagen} />
              <p>precio=${producto.price}</p>
              <p>categoria={producto.categoria}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
