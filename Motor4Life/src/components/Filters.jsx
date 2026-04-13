function Filter({ filters, setFilters, motos }) {

  const brands = [...new Set(motos.map((m) => m.brand))];
  const types = [...new Set(motos.map((m) => m.type))];
  const years = [...new Set(motos.map((m) => m.year))];

  function handleChange(e) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <input
        name="search"
        placeholder="Buscar moto..."
        value={filters.search}
        onChange={handleChange}
      />

      <select name="brand" onChange={handleChange}>
        <option value="">Marca</option>
        {brands.map((b) => (
          <option key={b}>{b}</option>
        ))}
      </select>

      
      <select name="year" onChange={handleChange}>
        <option value="">Ano</option>
        {years.map((y) => (
          <option key={y}>{y}</option>
        ))}
      </select>

      <input
        name="maxPrice"
        placeholder="Preço máximo"
        type="number"
        onChange={handleChange}
      />

      <select name="sort" onChange={handleChange}>
        <option value="">Ordenar</option>
        <option value="price_asc">Menor preço</option>
        <option value="price_desc">Maior preço</option>
      </select>
    </div>
  );
}

export default Filter;