import { createContext, useState, useEffect } from "react";

export const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [compareItems, setCompareItems] = useState(() => {
    const saved = localStorage.getItem("compare");
    return saved ? JSON.parse(saved) : [];
  });

  /* SALVAR NO LOCAL STORAGE */
  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compareItems));
  }, [compareItems]);

  /* ADICIONAR */
  function addToCompare(moto) {
    setCompareItems((prev) => {
      /* EVITA DUPLICADO */
      if (prev.some((item) => item.id === moto.id)) {
        return prev;
      }

      /* LIMITE DE 3 */
      if (prev.length >= 3) {
        alert("Você pode comparar no máximo 3 motos");
        return prev;
      }

      return [...prev, moto];
    });
  }

  /* REMOVER */
  function removeFromCompare(id) {
    setCompareItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  /* LIMPAR */
  function clearCompare() {
    setCompareItems([]);
  }

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}