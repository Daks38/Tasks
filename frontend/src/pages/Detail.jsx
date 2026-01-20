import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://tasks-sigma-ten.vercel.app/tasks/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setTask(data))
      .catch((err) => console.error(err));
  }, [id]);

const handleDelete = () => {
  if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
    fetch(`https://tasks-sigma-ten.vercel.app/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "x-user-id": localStorage.getItem("userId"),
      },
    })
      .then(async (res) => {
        const data = await res.json(); // 👈 récupérer JSON

        if (!res.ok) {
          // Erreur côté backend
          throw new Error(data.msg || "Impossible de supprimer la tâche");
        }

        // Message backend (succès)
        console.log("Succès:", data.msg);
        alert(data.msg);

        // Redirection
        navigate("/");
      })
      .catch((err) => {
        console.error("Erreur:", err.msg);
        alert(err.error); // affiche l’erreur
      });
  }
};


  if (!task) return <p>Chargement...</p>;

  return (
    <div>
      <section className="bg-white p-2 md:p-6 rounded-2xl border border-gray-300 max-w-xl mx-auto mt-[15vh]">
        <span className="p-2 rounded-2xl bg-green-700 text-white">
          {task.createdAt.slice(0, 10)}
        </span>
        <details open className="border-b border-gray-300">
          <summary className="outline-none list-none py-6 text-lg font-bold cursor-pointer relative flex justify-between rounded-lg select-none hover:after:opacity-75 focus-visible:ring-4 focus-visible:ring-gray-100">
            {task.title}
          </summary>
          <article className="animate-slide-in">
            <p className="text-gray-500 mb-6">{task.content}</p>
          </article>
        </details>
        <div className="flex gap-5 mt-5">
          <Link
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
            to={`/update/${task._id}`}
          >
            Modifier
          </Link>
          <button
            onClick={handleDelete}
            className="ml-auto w-1/2 bg-red-800 text-white p-2 rounded font-semibold hover:bg-red-900"
          >
            Supprimer
          </button>
        </div>
      </section>
    </div>
  );
};

export default Detail;
