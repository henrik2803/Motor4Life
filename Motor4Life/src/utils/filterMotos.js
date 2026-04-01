export function filterMotos(motos, search) {
  return motos.filter((moto) =>
    moto.nome.toLowerCase().includes(search.toLowerCase())
  );
}