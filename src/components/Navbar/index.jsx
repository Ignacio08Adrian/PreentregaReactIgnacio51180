import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container_nav">
      <Link to="/home">
        <p className="link_nav">Inicio</p>
      </Link>
      <Link to="/">
        <p className="link_nav">Productos</p>
      </Link>
      <p className="link_nav">Ordenar por:</p>
      <Link to="/category/triple-aaa">
        <p className="link_nav">Triple AAA</p>
      </Link>
      <Link to="/category/indies">
        <p className="link_nav">Indies</p>
      </Link>
    </nav>
  );
};

export default Navbar;
