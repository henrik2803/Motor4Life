import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <h2>MotoStore</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/comparar">Comparar</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div>
        <Link to="/carrinho">
          Carrinho ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;