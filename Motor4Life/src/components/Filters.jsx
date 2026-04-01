function Filter({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar moto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Filter;