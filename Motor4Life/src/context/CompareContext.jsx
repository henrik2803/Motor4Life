import { createContext, useState } from "react";

export const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState([]);

  function addToCompare(moto) {
    setCompareList((prev) => [...prev, moto]);
  }

  function removeFromCompare(id) {
    setCompareList((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
}