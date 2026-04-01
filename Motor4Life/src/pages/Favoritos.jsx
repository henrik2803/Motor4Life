import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MotoCard from "../components/MotoCard";

function Favoritos() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <h2>Nenhuma moto favoritada</h2>;
  }

  return (
    <div>
      <h1>Favoritos</h1>

      {favorites.map((moto) => (
        <MotoCard key={moto.id} moto={moto} />
      ))}
    </div>
  );
}

export default Favoritos;