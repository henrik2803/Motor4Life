const BASE_URL = "http://localhost:3000/motos";

export async function getMotoById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) throw new Error("Moto não encontrada");

  return res.json();
}