import { useState } from "react";
import styles from "../styles/components/MotoForm.module.css";

function MotoForm({ onSubmit, initialData = {} }) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    price: initialData.price || "",
    brand: initialData.brand || "",
    year: initialData.year || "",
    image: initialData.image || "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const moto = {
      ...form,
      price: Number(form.price),
      year: Number(form.year),
      images: [form.image],
    };

    onSubmit(moto);

    setForm({
      name: "",
      price: "",
      brand: "",
      year: "",
      image: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>

      <div className={styles.inputGroup}>
        <label>Nome</label>
        <input
          name="name"
          placeholder="Ex: Yamaha MT-07"
          value={form.name}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Preço</label>
        <input
          name="price"
          placeholder="Ex: 35000"
          value={form.price}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Marca</label>
        <input
          name="brand"
          placeholder="Ex: Yamaha"
          value={form.brand}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Ano</label>
        <input
          name="year"
          placeholder="Ex: 2022"
          value={form.year}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Imagem (URL)</label>
        <input
          name="image"
          placeholder="https://..."
          value={form.image}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.btnPrimary}>
        Salvar
      </button>

    </form>
  );
}

export default MotoForm;