export function calculateTotal(items) {
  return items.reduce((total, item) => total + item.preco, 0)
}
