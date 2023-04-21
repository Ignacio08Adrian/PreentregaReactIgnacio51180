import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartcontext";
import ItemCard from "../itemcard";
import "./cart.css";
import db from "../../../db/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrecio } = useCartContext();
  const [buyer, setBuyer] = useState({
    nombre: "",
    email: "",
    emailConfirm: "",
    phone: "",
    address: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };
  const order = {
    buyer: {
      nombre: buyer.nombre,
      email: buyer.email,
      phone: buyer.phone,
      address: buyer.address,
    },
    item: cart.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      price: producto.price,
      cantidad: producto.cantidad,
    })),
    total: totalPrecio(),
  };
  const handleClick = () => {
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      setSuccessMsg(`Compra exitosa! ID de compra: ${id}`);
    });
  };
  if (cart.length === 0) {
    return (
      <div>
        <p className="pbonito">
          no hay productos en el carrito en este momento
        </p>
        <Link to="/">hacer compras</Link>
      </div>
    );
  }
  return (
    <>
      {cart.map((producto) => (
        <ItemCard key={producto.id} producto={producto} />
      ))}
      <p className="pbonito">total: {totalPrecio()}</p>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <label>
          Confirmar email:
          <input
            type="email"
            name="emailConfirm"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Teléfono:
          <input type="text" name="phone" onChange={handleChange} required />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" onChange={handleChange} required />
        </label>
        <button onClick={handleClick} type="submit">
          emitir compra
        </button>
      </form>
      {successMsg && <p className="success">{successMsg}</p>}
    </>
  );
};
export default Cart;
