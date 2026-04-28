import { useContext } from "react";
import { CompareContext } from "../context/CompareContext";

import styles from "../styles/pages/Comparar.module.css";

function Comparar() {
  const { compareItems, removeFromCompare } = useContext(CompareContext);

  if (compareItems.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>⚖️ Nenhuma moto para comparar</h2>
        <p>Adicione motos para ver a comparação</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Comparar Motos</h1>

      {/* CARDS */}
      <div className={styles.cards}>
        {compareItems.map((moto) => (
          <div key={moto.id} className={styles.card}>
            <img src={moto.images?.[0]} alt={moto.name} />
            <h3>{moto.name}</h3>

            <button onClick={() => removeFromCompare(moto.id)}>
              Remover
            </button>
          </div>
        ))}
      </div>

      {/* TABELA */}
      <div className={styles.table}>
        <div className={styles.row}>
          <span>Marca</span>
          {compareItems.map((m) => (
            <span key={m.id}>{m.brand}</span>
          ))}
        </div>

        <div className={styles.row}>
          <span>Ano</span>
          {compareItems.map((m) => (
            <span key={m.id}>{m.year}</span>
          ))}
        </div>

        <div className={styles.row}>
          <span>Preço</span>
          {compareItems.map((m) => (
            <span key={m.id}>R$ {m.price}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comparar;