export function filterMotos(motos, filters) {
  return motos.filter((moto) => {
    return (
      moto.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.brand ? moto.brand === filters.brand : true) &&
      (filters.type ? moto.type === filters.type : true) &&
      (filters.year ? moto.year === Number(filters.year) : true) &&
      (filters.maxPrice ? moto.price <= Number(filters.maxPrice) : true)
    );
  });
}