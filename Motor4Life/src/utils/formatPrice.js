export function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}