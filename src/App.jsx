import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Cartwidget from "./components/cartwidget";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`/itemss.json`)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <>
      <div className="all">
        <div className="space">
          <div className="flex_nav">
            <div className="flex_nav">
              <Link to="/home">
                <img
                  src="/assets/game-control-doodle-svgrepo-com.svg"
                  alt=""
                  width="100"
                  height="100"
                />
              </Link>
            </div>
            <Navbar />
            <div className="flex_nav">
              <Cartwidget />
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}>
            {" "}
          </Route>
          <Route
            path="/products"
            element={
              <ItemListContainer
                productos={productos}
                setProductos={setProductos}
              />
            }
          ></Route>
          <Route
            path="/products/triple-aaa"
            element={
              <ItemListContainer
                productos={productos.filter(
                  (p) => p.categoria === "Triple AAA"
                )}
              />
            }
          ></Route>
          <Route
            path="/products/indies"
            element={
              <ItemListContainer
                productos={productos.filter((p) => p.categoria === "Indie")}
              />
            }
          ></Route>
          <Route
            path="/products/indies/:id"
            element={<ItemDetailContainer />}
          ></Route>
          <Route
            path="/products/triple-aaa/:id"
            element={<ItemDetailContainer />}
          ></Route>
          <Route path="/products/:id" element={<ItemDetailContainer />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
