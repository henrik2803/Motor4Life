import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  function handleLogin() {
    login({ name: "Admin" });
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;