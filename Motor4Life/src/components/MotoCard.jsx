import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { formatPrice } from "../utils/formatPrice";

function MotoCard({ moto }) {
  const { addToCart } = useContext(CartContext);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <img src={moto.images || moto.images?.[0]} alt={moto.name} width="200" />

      <h3>{moto.name}</h3>
      <p>{moto.brand}</p>
      <p>{moto.year}</p>
      <p>{formatPrice(moto.price)}</p>

      <button onClick={() => toggleFavorite(moto)}>
        {isFavorite(moto.id) ? "❤️" : "🤍"}
      </button>

      <button onClick={() => addToCart(moto)}>
            🛒 Adicionar
      </button>

      <Link to={`/moto/${moto.id}`}>Ver detalhes</Link>
    </div>
  );
}

export default MotoCard;