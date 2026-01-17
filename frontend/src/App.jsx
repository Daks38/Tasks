// App.js
import React from "react";
import Home from "../src/pages/Home";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Update from "./pages/Update";

export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      <Footer />
    </div>
  );
}
