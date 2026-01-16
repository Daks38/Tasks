// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <section className="flex-1 flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Bienvenue sur ton espace de gestion de tâches 📚
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Organise, consulte et supprime tes tâches comme tu veux.
          </p>
          <div className="space-x-4">
            <a
              href="/tâches"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Voir mes tâches
            </a>
            <a
              href="/ajouter"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
            >
              Ajouter une note
            </a>
          </div>
        </div>
      </section>  
    </div>
  );
}