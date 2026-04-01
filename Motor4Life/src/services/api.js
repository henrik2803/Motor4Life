const BASE_URL = "http://localhost:3000/motos";

export async function getMotos() {
  const res = await fetch(BASE_URL);
  return res.json();
}
