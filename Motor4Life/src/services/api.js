const BASE_URL = "http://localhost:3000/motos";

// GET ALL
export async function getMotos() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Erro ao buscar motos");
  return res.json();
}

// GET BY ID
export async function getMotoById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Moto não encontrada");
  return res.json();
}

// CREATE
export async function createMoto(moto) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(moto),
  });

  if (!res.ok) throw new Error("Erro ao criar moto");

  return res.json();
}

// UPDATE
export async function updateMoto(id, moto) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(moto),
  });

  if (!res.ok) throw new Error("Erro ao atualizar moto");

  return res.json();
}

// DELETE
export async function deleteMoto(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Erro ao deletar moto");
}