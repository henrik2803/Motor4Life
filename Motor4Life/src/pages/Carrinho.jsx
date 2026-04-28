import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { calculateTotal } from "../utils/calculateTotal";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Carrinho.module.css";

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
    return (
      <div className={styles.empty}>
        <h2>Carrinho vazio</h2>
        <button
          className={styles.btnPrimary}
          onClick={() => navigate("/")}
        >
          Voltar para loja
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carrinho</h1>

      <div className={styles.wrapper}>
        
        {/* LISTA DE ITENS */}
        <div className={styles.items}>
          {cart.map((item) => (
            <div key={item.id} className={styles.card}>
              
              <div className={styles.info}>
                <h3>{item.name}</h3>
                <p className={styles.price}>
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className={styles.actions}>
                <div className={styles.quantity}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <button
                  className={styles.remove}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* RESUMO */}
        <div className={styles.summary}>
          <h2>Total</h2>
          <p className={styles.total}>
            {formatPrice(total)}
          </p>

          <button
            className={styles.btnPrimary}
            onClick={() => navigate("/checkout")}
          >
            Finalizar compra
          </button>

          <button
            className={styles.btnOutline}
            onClick={clearCart}
          >
            Limpar carrinho
          </button>
        </div>

      </div>
    </div>
  );
}

export default Carrinho;