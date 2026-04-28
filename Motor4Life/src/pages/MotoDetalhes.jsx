import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import styles from "../styles/components/MotoDetalhes.module.css";

import { ToastContext } from "../context/ToastContext";
import { getMotoById } from "../services/api";
import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { CompareContext } from "../context/CompareContext";
import { formatPrice } from "../utils/formatPrice";
import { ReviewContext } from "../context/ReviewContext";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

function MotoDetalhes() {
  const { id } = useParams();

  const [moto, setMoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedImage, setSelectedImage] = useState(0);

  const { addToCart } = useContext(CartContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const { addToCompare } = useContext(CompareContext);
  const { showToast } = useContext(ToastContext);
  const { getAverage } = useContext(ReviewContext);

  useEffect(() => {
    async function fetchMoto() {
      try {
        const data = await getMotoById(id);
        setMoto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMoto();
  }, [id]);

  if (loading) return <p className={styles.state}>Carregando detalhes...</p>;
  if (error) return <p className={styles.state}>{error}</p>;
  if (!moto) return <p className={styles.state}>Moto não encontrada</p>;

  const isFavorite = favorites.some((f) => f.id === moto.id);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        {/* IMAGENS */}
        <div className={styles.gallery}>
          <img
            src={moto.images[selectedImage]}
            alt={moto.name}
            className={styles.mainImage}
          />

          <div className={styles.thumbs}>
            {moto.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className={`${styles.thumb} ${
                  selectedImage === index ? styles.active : ""
                }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className={styles.info}>
          <h1 className={styles.title}>{moto.name}</h1>

          <p className={styles.meta}>
            <span>{moto.brand}</span> • <span>{moto.year}</span> • <span>{moto.type}</span>
          </p>

          <h2 className={styles.price}>{formatPrice(moto.price)}</h2>

          <p className={styles.rating}>
            ⭐ Média: {getAverage(moto.id)}
          </p>

          {/* AÇÕES */}
          <div className={styles.actions}>
            <button
              className={`${styles.btn} ${styles.primary}`}
              onClick={() => {
                addToCart(moto);
                showToast("Moto adicionada ao carrinho", "success");
              }}
            >
              🛒 Adicionar
            </button>

            <button
              className={`${styles.btn} ${styles.secondary}`}
              onClick={() => {
                toggleFavorite(moto);
                showToast(
                  isFavorite
                    ? "Moto removida dos favoritos"
                    : "Moto adicionada aos favoritos",
                  isFavorite ? "error" : "success"
                );
              }}
            >
              {isFavorite ? "❤️ Remover" : "🤍 Favoritar"}
            </button>

            <button
              className={`${styles.btn} ${styles.outline}`}
              onClick={() => {
                addToCompare(moto);
                showToast("Moto adicionada para comparação", "success");
              }}
            >
              Comparar
            </button>
          </div>
        </div>
      </div>

      {/* AVALIAÇÕES */}
      <div className={styles.reviews}>
        <ReviewForm motoId={moto.id} />
        <ReviewList motoId={moto.id} />
      </div>
    </div>
  );
}

export default MotoDetalhes;