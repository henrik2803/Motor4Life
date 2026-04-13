import { useState } from "react";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    address: "",
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
    <div>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" onChange={handleChange} />
        <input name="address" placeholder="Endereço" onChange={handleChange} />

        <select name="payment" onChange={handleChange}>
          <option value="">Pagamento</option>
          <option value="cartao">Cartão</option>
          <option value="pix">PIX</option>
        </select>

        <button type="submit">Finalizar</button>
      </form>
    </div>
  );
}

export default Checkout;