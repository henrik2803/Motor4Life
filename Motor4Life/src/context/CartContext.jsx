import { createContext, useState, useEffect } from "react";
import { saveCart } from "../utils/storage";
import  getCart  from "../utils/storage";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  function addToCart(moto) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === moto.id);

      if (existing) {
        return prev.map((item) =>
          item.id === moto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...moto, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function increaseQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  function handleadd(id) {
    addToCart(moto);
    alert("Adicionado ao carrinho!");
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleadd,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}