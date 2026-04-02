import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      register(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h1>Cadastro</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Senha" onChange={handleChange} />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;