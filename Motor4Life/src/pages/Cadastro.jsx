import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Cadastro.module.css";

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
    setError("");
  }

  function validateForm() {
    if (!form.name || !form.email || !form.password) {
      return "Preencha todos os campos.";
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(form.email)) {
      return "Digite um email válido.";
    }

    if (form.password.length < 6) {
      return "A senha deve ter no mínimo 6 caracteres.";
    }

    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      register(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  const isFormValid =
    form.name &&
    form.email &&
    form.password &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.password.length >= 6;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cadastro</h1>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          
          <div className={styles.inputGroup}>
            <label>Nome</label>
            <input
              name="name"
              placeholder="Digite seu nome"
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              name="email"
              placeholder="Digite seu email"
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Senha</label>
            <input
              name="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={styles.btnPrimary}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;