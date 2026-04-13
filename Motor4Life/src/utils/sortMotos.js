export function sortMotos(motos, sort) {
  const sorted = [...motos];

  if (sort === "price_asc") {
    return sorted.sort((a, b) => a.price - b.price);
  }

  if (sort === "price_desc") {
    return sorted.sort((a, b) => b.price - a.price);
  }

  return motos;
}