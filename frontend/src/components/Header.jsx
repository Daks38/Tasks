import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white shadow-md mb-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/"><h1 className="text-2xl font-bold">Gestion de Tâches</h1></Link>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">
              Accueil
            </Link>
            <Link to="/add" className="hover:underline">
              Ajouter
            </Link>
            <Link to="/about" className="hover:underline">
              A propos
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
