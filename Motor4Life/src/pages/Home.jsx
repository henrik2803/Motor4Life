import useFetch from "../hooks/useFetch";
import MotoCard from "../components/MotoCard";
import Filter from "../components/Filters";
import { useState } from "react";
import { filterMotos } from "../utils/filterMotos";

function Home() {
  const { data: motos, loading, error } = useFetch(
    "http://localhost:3000/motos"
  );

  const [search, setSearch] = useState("");

  const filteredMotos = filterMotos(motos, search);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Motos</h1>

      <Filter search={search} setSearch={setSearch} />

      <div>
        {filteredMotos.map((moto) => (
          <MotoCard key={moto.id} moto={moto} />
        ))}
      </div>
    </div>
  );
}

export default Home;