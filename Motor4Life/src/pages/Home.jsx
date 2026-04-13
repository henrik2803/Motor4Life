import useFetch from "../hooks/useFetch";
import MotoCard from "../components/MotoCard";
import Filter from "../components/Filters";

import { useState } from "react";
import { filterMotos } from "../utils/filterMotos";
import { sortMotos } from "../utils/sortMotos";

function Home() {
  const { data: motos, loading, error } = useFetch(
    "http://localhost:3000/motos"
  );

  const [filters, setFilters] = useState({
    search: "",
    brand: "",
    type: "",
    year: "",
    maxPrice: "",
    sort: ""
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const filtered = filterMotos(motos, filters);
  const sorted = sortMotos(filtered, filters.sort);

  return (
    <div>
      <h1>Motos</h1>

      <Filter
        filters={filters}
        setFilters={setFilters}
        motos={motos}
      />

      <div>
        {sorted.map((moto) => (
          <MotoCard key={moto.id} moto={moto} />
        ))}
      </div>
    </div>
  );
}

export default Home;