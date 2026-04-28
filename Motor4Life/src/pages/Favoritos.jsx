import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MotoCard from "../components/MotoCard";
import styles from "../styles/pages/Favoritos.module.css";

function Favoritos() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Nenhuma moto favoritada</h2>
        <p>Adicione motos aos favoritos para vê-las aqui.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Favoritos</h1>

      <div className={styles.grid}>
        {favorites.map((moto) => (
          <MotoCard key={moto.id} moto={moto} />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;