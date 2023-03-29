import { Link } from "react-router-dom";
import "./cartwidget.css";

const Cartwidget = () => {
  return (
    <div className="flex">
      <img
        className="carrito_nav"
        src="https://cdn-icons-png.flaticon.com/512/4437/4437607.png"
        alt=""
        height="40"
        width="40"
      />
      <div className="cantidad_nav">
        <p className="circle_nav">2</p>
      </div>
    </div>
  );
};

export default Cartwidget;
