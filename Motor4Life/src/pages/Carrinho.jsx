import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { calculateTotal } from "../utils/calculateTotal";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useContext(CartContext);

  const total = calculateTotal(cart);

  const navigate = useNavigate();

  if (cart.length === 0) {
    return <h2>Carrinho vazio</h2>;
  }

  return (
    <div>
      <h1>Carrinho</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{formatPrice(item.price)}</p>

          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>
            Remover
          </button>
        </div>
      ))}

      <h2>Total: {formatPrice(total)}</h2>

      <button onClick={clearCart}>Limpar carrinho</button>

        <button onClick={() => navigate("/checkout")}>
          Finalizar compra
        </button>

    </div>
  );
}

export default Carrinho;