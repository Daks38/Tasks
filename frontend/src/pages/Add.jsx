import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Add = () => {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const sendSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, content };
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de l'ajout");
        return res.json();
      })
      .then(() => {
        navigate("/Home");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <main class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
        <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
          <h1 class="text-4xl font-semibold">Créer une tâche</h1>
        </div>
        <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
          <form onSubmit={sendSubmit}>
            <input
              class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Titre"
            />
            <input
              class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              placeholder="Description"
            />
         
          <div class="flex items-center">
            <button
              class="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
              type="submit"
            >
              Ajouter
            </button> 
          </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Add;
