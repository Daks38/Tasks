import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`https://tasks-sigma-ten.vercel.app/tasks/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement");
        return res.json();
      })
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const sendUpdate = (e) => {
    e.preventDefault();
    const updatedTask = { title, content };

    fetch(`https://tasks-sigma-ten.vercel.app/tasks${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors de la mise à jour");
        return res.json();
      })
      .then(() => {
        navigate("/"); 
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
          <h1 className="text-4xl font-semibold">Mettre à jour une tâche</h1>
        </div>
        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
          <form onSubmit={sendUpdate}>
            <input
              className="mb-4 p-2 block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              type="text"
              placeholder="Titre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              className="mb-4 p-2 block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
              type="text"
              placeholder="Description"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
            <div className="flex items-center">
              <button
                type="submit"
                className="ml-auto w-1/2 bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700"
              >
                Mettre à jour
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Update;
