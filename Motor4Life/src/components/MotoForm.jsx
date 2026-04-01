import { useState, useEffect } from "react"

function MotoForm({ onSubmit, motoEdit }) {
  const [form, setForm] = useState({
    nome: "",
    marca: "",
    ano: "",
    preco: "",
    imagem: ""
  })

  useEffect(() => {
    if (motoEdit) {
      setForm(motoEdit)
    }
  }, [motoEdit])

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    onSubmit({
      ...form,
      preco: Number(form.preco),
      ano: Number(form.ano)
    })

    setForm({
      nome: "",
      marca: "",
      ano: "",
      preco: "",
      imagem: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
      <input name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} />
      <input name="ano" type="number" placeholder="Ano" value={form.ano} onChange={handleChange} />
      <input name="preco" type="number" placeholder="Preço" value={form.preco} onChange={handleChange} />
      <input name="imagem" placeholder="URL da imagem" value={form.imagem} onChange={handleChange} />

      <button type="submit">
        {motoEdit ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  )
}

export default MotoForm