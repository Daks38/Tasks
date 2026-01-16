// App.js
import React from "react";
import Home from "../src/pages/Home";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./pages/Add";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/add">Ajouter</Link> |{" "}
      </nav>
<Header />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/details" element={<Detail />} />
      </Routes>
      <Footer />  
    </div>
  );
}
