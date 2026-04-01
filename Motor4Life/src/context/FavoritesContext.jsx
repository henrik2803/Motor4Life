import { createContext, useState, useEffect } from "react";
import { getFavorites, saveFavorites } from "../utils/storage";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  function isFavorite(id) {
    return favorites.some((m) => m.id === id);
  }

  function addFavorite(moto) {
    if (!isFavorite(moto.id)) {
      setFavorites((prev) => [...prev, moto]);
    }
  }

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  }

  function toggleFavorite(moto) {
    if (isFavorite(moto.id)) {
      removeFavorite(moto.id);
    } else {
      addFavorite(moto);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}