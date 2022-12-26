import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

import Home from "../pages/Home";
import Destinos from "../pages/Destinos";
import Promocoes from "../pages/Promocoes";
import Contato from "../pages/Contato";
import Cadastros from "../pages/Cadastros";

export default function Rotas () {
    return (
        <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadastros" element={<Cadastros />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </>
    )
}