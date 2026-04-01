export function sortMotos(motos, ordem) {
  if (ordem === "asc") {
    return [...motos].sort((a, b) => a.preco - b.preco)
  }

  if (ordem === "desc") {
    return [...motos].sort((a, b) => b.preco - a.preco)
  }

  return motos
}