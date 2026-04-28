import { useEffect, useState } from "react";
import {
  getMotos,
  createMoto,
  deleteMoto
} from "../services/api";

import MotoForm from "../components/MotoForm";
import styles from "../styles/pages/Dashboard.module.css";

function Dashboard() {
  const [motos, setMotos] = useState([]);
  const [error, setError] = useState(null);

  async function loadMotos() {
    try {
      const data = await getMotos();
      setMotos(data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadMotos();
  }, []);

  async function handleCreate(moto) {
    try {
      await createMoto(moto);
      loadMotos();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteMoto(id);
      loadMotos();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      <div className={styles.layout}>

        {/* FORM */}
        <div className={styles.formSection}>
          <h2 className={styles.subtitle}>Adicionar Moto</h2>

          <div className={styles.formCard}>
            <MotoForm onSubmit={handleCreate} />
          </div>
        </div>

        {/* LISTA */}
        <div className={styles.listSection}>
          <h2 className={styles.subtitle}>Lista de Motos</h2>

          <div className={styles.list}>
            {motos.map((moto) => (
              <div key={moto.id} className={styles.card}>

                <div className={styles.cardInfo}>
                  <p className={styles.name}>{moto.name}</p>

                  <div className={styles.meta}>
                    <span>{moto.brand}</span>
                    <span>{moto.year}</span>
                  </div>

                  <p className={styles.price}>
                    R$ {moto.price.toFixed(2)}
                  </p>
                </div>

                <div className={styles.cardActions}>
                  <button
                    className={styles.delete}
                    onClick={() => handleDelete(moto.id)}
                  >
                    Deletar
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;