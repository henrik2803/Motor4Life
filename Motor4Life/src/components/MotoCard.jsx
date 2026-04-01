import { Link } from "react-router-dom"
import { formatPrice } from "../utils/formatPrice"
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"
import { CartContext } from "../context/CartContext"

function MotoCard({ moto }) {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext)
  const { addToCart } = useContext(CartContext)

  return (
    <div className="moto-card">
      <img src={moto.imagem} alt={moto.nome} />

      <h3>{moto.nome}</h3>
      <p>{moto.marca}</p>
      <p>{moto.ano}</p>
      <strong>{formatPrice(moto.preco)}</strong>

      <button onClick={() => toggleFavorite(moto)}>
        {isFavorite(moto.id) ? "Remover ❤️" : "Favoritar 🤍"}
      </button>

      <button onClick={() => addToCart(moto)}>
        Adicionar ao carrinho 🛒
      </button>

      <Link to={`/motos/${moto.id}`}>
        <button>Ver detalhes</button>
      </Link>
    </div>
  )
}

export default MotoCard