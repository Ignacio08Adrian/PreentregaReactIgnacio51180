import { Link } from "react-router-dom";
import "./cartwidget.css";
import { useCartContext } from "../../context/cartcontext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cartwidget = () => {
  const { totalProductos } = useCartContext();
  return (
    <Link to="/cart">
      <div className="position-relative">
        <div className="cantidad_nav circle_nav">{totalProductos}</div>
        <ShoppingCartIcon fontSize="large" />
      </div>
    </Link>
  );
};

export default Cartwidget;
