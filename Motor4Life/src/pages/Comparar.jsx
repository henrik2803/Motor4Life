import { useContext } from "react";
import { CompareContext } from "../context/CompareContext";

function Comparar() {
  const { compareList } = useContext(CompareContext);

  return (
    <div>
      <h1>Comparar</h1>
      {compareList.map((m) => (
        <p key={m.id}>{m.name}</p>
      ))}
    </div>
  );
}

export default Comparar;