import { Link } from "react-router-dom";
import { useContext } from "react";
import { memo } from "react";
import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { formatPrice } from "../utils/formatPrice";
import { ToastContext } from "../context/ToastContext";

import styles from "../styles/components/MotoCard.module.css";

function MotoCard({ moto }) {
  const { addToCart } = useContext(CartContext);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);
  const { showToast } = useContext(ToastContext);

  const image =
    Array.isArray(moto.images) ? moto.images[0] : moto.images;

  return (
    <div className={styles.card}>
      {/* IMAGEM */}
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={moto.name}
          className={styles.image}
          loading="lazy"
        />
      </div>

      {/* CONTEÚDO */}
      <div className={styles.content}>
        <h3 className={styles.title}>{moto.name}</h3>
        <p className={styles.brand}>{moto.brand}</p>
        <p className={styles.year}>{moto.year}</p>

        <p className={styles.price}>
          {formatPrice(moto.price)}
        </p>

        {/* AÇÕES */}
        <div className={styles.actions}>
          <button
            className={`${styles.button} ${styles.favoriteButton}`}
            onClick={() => {
              toggleFavorite(moto);
              showToast(
                isFavorite(moto.id)
                  ? "Moto removida dos favoritos"
                  : "Moto adicionada aos favoritos",
                isFavorite(moto.id) ? "error" : "success"
              );
            }}
          >
            {isFavorite(moto.id) ? "❤️" : "🤍"}
          </button>

          <button
            className={`${styles.button} ${styles.cartButton}`}
            onClick={() => {
              addToCart(moto);
              showToast("Moto adicionada ao carrinho!", "success");
            }}
          >
            🛒 adicionar
          </button>
        </div>

        {/* DETALHES */}
        <Link
          to={`/moto/${moto.id}`}
          className={styles.details}
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}

export default memo(MotoCard);