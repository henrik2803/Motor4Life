import { supabase } from "./supabase";

// GET ALL
export async function getMotos() {
  const { data, error } = await supabase
    .from("motos")
    .select("*")
    .order("id");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// GET BY ID
export async function getMotoById(id) {
  const { data, error } = await supabase
    .from("motos")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// CREATE
export async function createMoto(moto) {
  const { data, error } = await supabase
    .from("motos")
    .insert([moto])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// UPDATE
export async function updateMoto(id, moto) {
  const { data, error } = await supabase
    .from("motos")
    .update(moto)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// DELETE
export async function deleteMoto(id) {
  const { error } = await supabase
    .from("motos")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}