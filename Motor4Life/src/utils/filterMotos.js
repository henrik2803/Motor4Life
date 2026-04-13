export function filterMotos(motos, search) {
  return motos.filter((moto) =>
    moto.name.toLowerCase().includes(search.toLowerCase())
  );
}