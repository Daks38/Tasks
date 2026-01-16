import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gestion de Notes</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">
              Accueil
            </a>
            <a href="/notes" className="hover:underline">
              Mes Notes
            </a>
            <a href="/profil" className="hover:underline">
              Profil
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
