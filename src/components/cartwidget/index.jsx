import { Link } from "react-router-dom";
import "./cartwidget.css";
import { useCartContext } from "../../context/cartcontext";

const Cartwidget = () => {
  const { totalProductos } = useCartContext();
  return (
    <Link to="/cart">
      <div className="flex">
        <img
          className="carrito_nav"
          src="https://cdn-icons-png.flaticon.com/512/4437/4437607.png"
          alt=""
          height="40"
          width="40"
        />
        <div className="cantidad_nav">
          <p className="circle_nav">{totalProductos}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cartwidget;
