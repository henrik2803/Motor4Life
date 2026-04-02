import { useEffect, useState } from "react";
import {
  getMotos,
  createMoto,
  deleteMoto
} from "../services/api";

import MotoForm from "../components/MotoForm";

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
    <div>
      <h1>Dashboard</h1>

      {error && <p>{error}</p>}

      <h2>Adicionar Moto</h2>
      <MotoForm onSubmit={handleCreate} />

      <h2>Lista de Motos</h2>

      {motos.map((moto) => (
        <div key={moto.id}>
          <p>{moto.name}</p>
          <button onClick={() => handleDelete(moto.id)}>
            Deletar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;