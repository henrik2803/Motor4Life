import useFetch from "../hooks/useFetch";
import MotoCard from "../components/MotoCard";
import Filter from "../components/Filters";
import Loader from "../components/Loader.jsx";

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

  if (loading) return <Loader />;
  if (error) return  <p>Erro ao carregar motos 😢</p>;

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
            {sorted.length > 0 ? (
               sorted.map((moto) => (
               <MotoCard key={moto.id} moto={moto} />
                ))
              ) : (
                    <div >
                         <h2>🔍 Nenhuma moto encontrada</h2>
                           <p>Tente ajustar os filtros</p>
            </div>
  )}
</div>
    </div>
  );
}

export default Home;