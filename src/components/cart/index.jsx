import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartcontext";
import ItemCard from "../itemcard";
import "./cart.css";
import db from "../../../db/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { Button } from "@mui/material";

const Cart = () => {
  const { cart, totalPrecio, clearcart } = useCartContext();
  const [buyer, setBuyer] = useState({
    nombre: "",
    email: "",
    emailConfirm: "",
    phone: "",
  });
  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  const order = {
    buyer: {
      nombre: buyer.nombre,
      email: buyer.email,
      phone: buyer.phone,
    },
    item: cart.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      price: producto.price,
      cantidad: producto.cantidad,
    })),
    total: totalPrecio(),
    date: formattedDate,
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (
      buyer.nombre !== "" &&
      buyer.email !== "" &&
      buyer.email === buyer.emailConfirm &&
      buyer.phone !== ""
    ) {
      const orderCollection = collection(db, "orders");
      addDoc(orderCollection, order).then(({ id }) => {
        clearcart();
        Swal.fire({
          icon: "success",
          title: `Compra exitosa! ID de compra: ${id}`,
        });
      });
    }
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
        <label className="pbonito not-flex">
          Nombre:
          <input type="text" name="nombre" onChange={handleChange} required />
        </label>
        <label className="pbonito not-flex">
          Email:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
        <label className="pbonito not-flex">
          Confirmar email:
          <input
            type="email"
            name="emailConfirm"
            onChange={handleChange}
            required
          />
        </label>
        <label className="pbonito not-flex">
          Teléfono:
          <input type="text" name="phone" onChange={handleChange} required />
        </label>
        <Button
          className="not-flex"
          onClick={handleClick}
          type="submit"
          variant="contained"
          color="primary"
        >
          Emitir compra
        </Button>
      </form>
    </>
  );
};
export default Cart;
