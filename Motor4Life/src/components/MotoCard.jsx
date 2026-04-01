import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { formatPrice } from "../utils/formatPrice";

function MotoCard({ moto }) {
  const { addToCart } = useContext(CartContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((f) => f.id === moto.id);

  return (
    <div>
      <img src={moto.imagem} alt={moto.nome} width="200" />

      <h3>{moto.nome}</h3>
      <p>{moto.marca}</p>
      <p>{moto.ano}</p>
      <p>{formatPrice(moto.preco)}</p>

      <button onClick={() => toggleFavorite(moto)}>
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <button onClick={() => addToCart(moto)}>
        Adicionar ao carrinho
      </button>

      <Link to={`/moto/${moto.id}`}>Ver detalhes</Link>
    </div>
  );
}

export default MotoCard;