import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRoute";

/* LAZY IMPORTS */
const Home = lazy(() => import("../pages/Home"));
const MotoDetalhes = lazy(() => import("../pages/MotoDetalhes"));
const Carrinho = lazy(() => import("../pages/Carrinho"));
const Favoritos = lazy(() => import("../pages/Favoritos"));
const Comparar = lazy(() => import("../pages/Comparar"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));
const Cadastro = lazy(() => import("../pages/Cadastro"));
const Checkout = lazy(() => import("../pages/Checkout"));

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default AppRoutes;