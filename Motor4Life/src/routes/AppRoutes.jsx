import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MotoDetalhes from "../pages/MotoDetalhes";
import Carrinho from "../pages/Carrinho";
import Favoritos from "../pages/Favoritos";
import Comparar from "../pages/Comparar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Checkout from "../pages/Checkout";

import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/moto/:id" element={<MotoDetalhes />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/comparar" element={<Comparar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
  );
}

export default AppRoutes;