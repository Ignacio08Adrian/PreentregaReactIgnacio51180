import React, { useContext, useState } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((producto) => {
          return producto.id === item.id
            ? { ...producto, cantidad: producto.cantidad + cantidad }
            : producto;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0);
  };

  const totalProductos = cart.reduce(
    (rejunte, productoCarro) => rejunte + productoCarro.cantidad,
    0
  );

  const clearcart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((producto) => producto.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((producto) => producto.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearcart,
        isInCart,
        removeProduct,
        addProduct,
        totalProductos,
        totalPrecio,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
