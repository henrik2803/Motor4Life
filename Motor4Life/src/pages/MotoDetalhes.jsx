import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import { getMotoById } from "../services/api";
import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { CompareContext } from "../context/CompareContext";
import { formatPrice } from "../utils/formatPrice";


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

  if (loading) return <p>Carregando detalhes...</p>;
  if (error) return <p>{error}</p>;
  if (!moto) return <p>Moto não encontrada</p>;

  const isFavorite = favorites.some((f) => f.id === moto.id);

  return (
    <div>
      <h1>{moto.name}</h1>

      {/* IMAGEM PRINCIPAL */}
      <img
        src={moto.images[selectedImage]}
        alt={moto.name}
        width="400"
      />

      {/* GALERIA */}
      <div>
        {moto.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumb"
            width="80"
            onClick={() => setSelectedImage(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      {/* INFO */}
      <p>Marca: {moto.brand}</p>
      <p>Ano: {moto.year}</p>
      <p>Tipo: {moto.type}</p>
      <h2>{formatPrice(moto.price)}</h2>

      {/* AÇÕES */}
      <button
        onClick={() => {
              addToCart(moto);
              showToast("Moto adicionada ao carrinho", "success");
        }}
      >
  🛒 Adicionar
</button>

      <button onClick={() => {
        toggleFavorite(moto);
        showToast(
          isFavorite ? "Moto removida dos favoritos" : "Moto adicionada aos favoritos",
          isFavorite ? "error" : "success"
        );
      }}>
        {isFavorite ? "❤️ Remover" : "🤍 Favoritar"}
      </button>

      <button onClick={() => {
        addToCompare(moto);
        showToast("Moto adicionada para comparação", "success");
      }}>
        Comparar
      </button>
    </div>
  );
}

export default MotoDetalhes;