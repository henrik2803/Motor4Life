export function sortMotos(motos, ordem) {
  if (ordem === "asc") {
    return [...motos].sort((a, b) => a.price - b.price)
  }

  if (ordem === "desc") {
    return [...motos].sort((a, b) => b.price - a.price)
  }

  return motos
}