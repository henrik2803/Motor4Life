import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Carrinho() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Carrinho</h1>
      {cart.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Carrinho;