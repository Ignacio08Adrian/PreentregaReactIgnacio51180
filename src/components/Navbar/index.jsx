import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container_nav">
      <Link to="/home">
        <p className="link_nav">Inicio</p>
      </Link>
      <Link to="/products">
        <p className="link_nav">Productos</p>
      </Link>
      <p className="link_nav">Informacion</p>
      <p className="link_nav">Contacto</p>
      <p className="link_nav">Ordenar por:</p>
      <Link to="/products/triple-aaa">
        <p className="link_nav">Triple AAA</p>
      </Link>
      <Link to="/products/indies">
        <p className="link_nav">Indies</p>
      </Link>
    </nav>
  );
};

export default Navbar;
