import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar icono="https://cdn-icons-png.flaticon.com/512/4437/4437607.png" />
      <ItemListContainer greeting="productos" />
      <div>
        <h1>Tienda My Games</h1>
      </div>
      <div className="flex_button">
        <Button texto="Inicio" />
        <Button texto="informacion" />
        <Button texto="productos" />
        <Button texto="contacto" />
        <Button texto="aceptar" />
        <Button texto="rechazar" />
      </div>
    </>
  );
}

export default App;
