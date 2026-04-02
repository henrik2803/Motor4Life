import { useState } from "react";

function MotoForm({ onSubmit, initialData = {} }) {
  const [form, setForm] = useState({
    name: initialData.nome || "",
    price: initialData.preco || "",
    brand: initialData.marca || "",
    year: initialData.ano || "",
    image: initialData.imagem || "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.nome]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const moto = {
      ...form,
      price: Number(form.preco),
      year: Number(form.ano),
      images: [form.imagem], // base simples
    };

    onSubmit(moto);

    setForm({
      nome: "",
      preco: "",
      marca: "",
      ano: "",
      imagem: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome" value={form.nome} onChange={handleChange} />
      <input name="price" placeholder="Preço" value={form.preco} onChange={handleChange} />
      <input name="brand" placeholder="Marca" value={form.marca} onChange={handleChange} />
      <input name="year" placeholder="Ano" value={form.ano} onChange={handleChange} />
      <input name="image" placeholder="URL da imagem" value={form.imagem} onChange={handleChange} />

      <button type="submit">Salvar</button>
    </form>
  );
}

export default MotoForm;