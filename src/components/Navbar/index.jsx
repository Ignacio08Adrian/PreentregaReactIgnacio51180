import "./navbar.css";

const Navbar = ({ icono }) => {
  return (
    <nav className="container_nav">
      <p className="link_nav">Inicio</p>
      <p className="link_nav">Informacion</p>
      <p className="link_nav">Productos</p>
      <p className="link_nav">Contacto</p>
      <img className="carrito_nav" src={icono} alt="" height="40" width="40" />
      <div className="cantidad_nav">
        <p className="circle_nav">2</p>
      </div>
    </nav>
  );
};

export default Navbar;
