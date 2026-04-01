import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("favorites");
    if (data) setFavorites(JSON.parse(data));
  }, []);

  function toggleFavorite(moto) {
    let updated;

    if (favorites.find((f) => f.id === moto.id)) {
      updated = favorites.filter((f) => f.id !== moto.id);
    } else {
      updated = [...favorites, moto];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}