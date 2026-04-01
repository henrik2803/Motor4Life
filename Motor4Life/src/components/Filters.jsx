function Filters({ busca, setBusca, marca, setMarca, preco, setPreco, ordem, setOrdem }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar moto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <select value={marca} onChange={(e) => setMarca(e.target.value)}>
        <option value="">Todas marcas</option>
        <option value="Honda">Honda</option>
        <option value="Yamaha">Yamaha</option>
        <option value="BMW">BMW</option>
        <option value="Kawasaki">Kawasaki</option>
      </select>

      <input
        type="number"
        placeholder="Preço máximo"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
        <option value="">Ordenar</option>
        <option value="asc">Menor preço</option>
        <option value="desc">Maior preço</option>
      </select>
    </div>
  )
}

export default Filters