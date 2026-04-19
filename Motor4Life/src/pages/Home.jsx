import useFetch from "../hooks/useFetch";
import MotoCard from "../components/MotoCard";
import Filter from "../components/Filters";
import Loader from "../components/Loader";
import { useMemo } from "react";

import { useState } from "react";
import { filterMotos } from "../utils/filterMotos";
import { sortMotos } from "../utils/sortMotos";

import styles from "../styles/pages/Home.module.css";

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

  if (error)
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <h2>😢 Erro ao carregar motos</h2>
          <p>Tente novamente mais tarde</p>
        </div>
      </div>
    );

      const filtered = useMemo(() => {
          return filterMotos(motos, filters);
      }, [motos, filters]);

      const sorted = useMemo(() => {
          return sortMotos(filtered, filters.sort);
      }, [filtered, filters.sort]);

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>Motos</h1>
      </div>

      {/* LAYOUT */}
      <div className={styles.content}>
        {/* FILTROS */}
        <aside className={styles.sidebar}>
          <Filter
            filters={filters}
            setFilters={setFilters}
            motos={motos}
          />
        </aside>

        {/* GRID */}
        <div className={styles.grid}>
          {sorted.length > 0 ? (
            sorted.map((moto) => (
              <MotoCard key={moto.id} moto={moto} />
            ))
          ) : (
            <div className={styles.empty}>
              <h2>🔍 Nenhuma moto encontrada</h2>
              <p>Tente ajustar os filtros</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;