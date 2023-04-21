import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Cartwidget from "./components/cartwidget";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart";
import CartProvider from "./context/cartcontext";

function App() {
  return (
    <>
      <div className="all">
        <CartProvider>
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
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
