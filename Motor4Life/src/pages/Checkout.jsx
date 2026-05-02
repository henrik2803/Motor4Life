import { useState } from "react";
import styles from "../styles/pages/Checkout.module.css";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    document: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    payment: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Compra finalizada!");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <h1 className={styles.title}>Checkout</h1>

        <form onSubmit={handleSubmit} className={styles.form}>

          {/* DADOS PESSOAIS */}
          <div className={styles.section}>
            <h2 className={styles.subtitle}>Dados pessoais</h2>

            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label>Nome completo</label>
                <input name="name" onChange={handleChange} className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label>CPF</label>
                <input name="document" onChange={handleChange} className={styles.input} />
              </div>
            </div>
          </div>

          {/* ENDEREÇO */}
          <div className={styles.section}>
            <h2 className={styles.subtitle}>Endereço</h2>

            <div className={styles.inputGroup}>
              <label>Endereço</label>
              <input name="address" onChange={handleChange} className={styles.input} />
            </div>

            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label>Cidade</label>
                <input name="city" onChange={handleChange} className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label>Estado</label>
                <input name="state" onChange={handleChange} className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label>CEP</label>
                <input name="zip" onChange={handleChange} className={styles.input} />
              </div>
            </div>
          </div>

          {/* PAGAMENTO */}
          <div className={styles.section}>
            <h2 className={styles.subtitle}>Pagamento</h2>

            <div className={styles.inputGroup}>
              <label>Forma de pagamento</label>
              <select
                name="payment"
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Selecione</option>
                <option value="cartao">Cartão</option>
                <option value="pix">PIX</option>
              </select>
            </div>
          </div>

          <button type="submit" className={styles.btnPrimary}>
            Finalizar compra
          </button>

        </form>
      </div>
    </div>
  );
}

export default Checkout;