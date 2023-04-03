import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ producto }) => {
  return (
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
  );
};

export default Card;
