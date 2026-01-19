import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Gestion de Tâches
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">
            Accueil
          </Link>
          <Link to="/add" className="hover:underline">
            Ajouter
          </Link>
          <Link to="/about" className="hover:underline">
            À propos
          </Link>
        </nav>

        {/* Bouton hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden bg-blue-700 px-6 py-4 space-y-3">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:underline"
          >
            Accueil
          </Link>
          <Link
            to="/add"
            onClick={() => setOpen(false)}
            className="block hover:underline"
          >
            Ajouter
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block hover:underline"
          >
            À propos
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;


// import React from "react";
// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <div>
//       <header className="bg-blue-600 text-white shadow-md mb-20">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <Link to="/"><h1 className="text-2xl font-bold">Gestion de Tâches</h1></Link>
//           <nav className="space-x-4">
//             <Link to="/" className="hover:underline">
//               Accueil
//             </Link>
//             <Link to="/add" className="hover:underline">
//               Ajouter
//             </Link>
//             <Link to="/about" className="hover:underline">
//               A propos
//             </Link>
//           </nav>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;
