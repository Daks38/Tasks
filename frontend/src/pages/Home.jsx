// import React, { useEffect, useState } from "react";
import Card from "../components/Cards";
import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <div>
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
              <Link
                to="/add"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
              >
                Ajouter une note
              </Link>
            </div>
          </div>
        </section>
        <section className="flex justify-around  gap-14 flex-wrap mt-20 mb-20">
          <Card />
        </section>
      </div>
    </div>
  );
};

export default Home;
