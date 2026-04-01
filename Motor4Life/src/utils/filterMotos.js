export function filterMotos(motos, busca, marca, precoMax) {
  return motos.filter((moto) => {
    return (
      moto.nome.toLowerCase().includes(busca.toLowerCase()) &&
      (marca ? moto.marca === marca : true) &&
      (precoMax ? moto.preco <= precoMax : true)
    )
  })
}