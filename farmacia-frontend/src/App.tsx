import React from "react";
import "./App.css";

import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import Home from "./paginas/home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import FormularioCategorias from "./components/categorias/formularioCategoria/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
//import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route
                path="/cadastroCategoria"
                element={<FormularioCategoria />}
              />
              <Route
                path="/editarCategoria/:id"
                element={<FormularioCategoria />}
              />
              <Route
                path="/deletarCategoria/:id"
                element={<DeletarCategoria />}
              />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route
                path="/editarProduto/:id"
                element={<FormularioProduto />}
              />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
