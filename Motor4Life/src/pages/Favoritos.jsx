import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function Favoritos() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.map((m) => (
        <p key={m.id}>{m.name}</p>
      ))}
    </div>
  );
}

export default Favoritos;