import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import styles from "../styles/components/Navbar.module.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <h2 className={styles.logo}>MotoStore</h2>

      {/* BOTÃO HAMBURGUER */}
     <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
          <span></span>
          <span></span>
          <span></span>

      {/* BADGE DO CARRINHO */}
          {totalItems > 0 && (
            <span className={styles.badge}>{totalItems}</span>
          )}
      </button>

        {menuOpen && (
          <div
            className={styles.overlay}
            onClick={() => setMenuOpen(false)}
          />
        )}

      {/* LINKS */}
      <div
        className={`${styles.links} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/favoritos" onClick={() => setMenuOpen(false)}>Favoritos</Link>
        <Link to="/comparar" onClick={() => setMenuOpen(false)}>Comparar</Link>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
      </div>

      {/* AÇÕES */}
      <div
        className={`${styles.actions} ${
          menuOpen ? styles.active : ""
        }`}
      >
        <Link to="/carrinho" onClick={() => setMenuOpen(false)}>
          🛒 ({totalItems})
        </Link>

        {user ? (
          <>
            <span>{user.name}</span>
            <button onClick={logout}>Sair</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;