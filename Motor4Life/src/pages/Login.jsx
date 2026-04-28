import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Login.module.css";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
      login(form);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <h1 className={styles.title}>Login</h1>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              name="email"
              placeholder="Digite seu email"
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Senha</label>
            <input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.btnPrimary}>
            Entrar
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;