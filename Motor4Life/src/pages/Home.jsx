import useFetch from "../hooks/useFetch";
import MotoCard from "../components/MotoCard";
import Filter from "../components/Filters";
import Loader from "../components/Loader";
import { useMemo, useState, useEffect } from "react";

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  /* RESETAR PÁGINA AO FILTRAR */
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  /* FILTRO */
  const filtered = useMemo(() => {
    if (!motos) return [];
    return filterMotos(motos, filters);
  }, [motos, filters]);

  /* ORDENAÇÃO */
  const sorted = useMemo(() => {
    return sortMotos(filtered, filters.sort);
  }, [filtered, filters.sort]);

  /* PAGINAÇÃO */
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMotos = sorted.slice(startIndex, endIndex);

  /* AGORA SIM — RETURNS */
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Motos</h1>
      </div>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <Filter
            filters={filters}
            setFilters={setFilters}
            motos={motos}
          />
        </aside>

        <div className={styles.grid}>
          {sorted.length > 0 ? (
            currentMotos.map((moto) => (
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

      {sorted.length > 0 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
          >
            ←
          </button>

          <span>
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;