import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [msg, setMsg] = useState(null); // msg devient un objet { type, text }
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://tasks-sigma-ten.vercel.app/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data))
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
          const data = await res.json();

          if (!res.ok) {
            const message = data.msg || data.error || "Erreur inconnue";
            throw new Error(message);
          }

          console.log("Succès :", data.message);
          setMsg({ type: "success", text: data.message });

          setTimeout(() => navigate("/"), 2000);
        })
        .catch((err) => {
          console.error("Erreur:", err.message);
          setMsg({ type: "error", text: err.message });
        });
    }
  };

  if (!task) return <p>Chargement...</p>;

  return (
    <div>
      {/* Message stylé */}
      {msg && (
        <div
          className={`flex items-center p-4 mb-4 text-sm rounded-lg border transition-opacity duration-500 ease-in-out
            ${
              msg.type === "success"
                ? "bg-green-100 text-green-700 border-green-300"
                : "bg-red-100 text-red-700 border-red-300"
            }`}
          role="alert"
        >
          <svg
            className={`w-5 h-5 mr-2 ${
              msg.type === "success" ? "text-green-600" : "text-red-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {msg.type === "success" ? (
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11h2v4h-2V7zm0 6h2v2h-2v-2z"
                clipRule="evenodd"
              />
            )}
          </svg>
          <span className="font-medium">
            {msg.type === "success" ? "Tâche supprimée avec succès !" : "Erreur !"}
          </span>
          <span className="ml-2">{msg.text}</span>
        </div>
      )}

      {/* Bloc de tâche */}
      <section className="bg-white p-2 md:p-6 rounded-2xl border border-gray-300 max-w-xl mx-auto mt-[15vh] shadow-lg hover:shadow-xl transition-shadow">
        <span className="p-2 rounded-2xl bg-green-700 text-white">
          {task.createdAt.slice(0, 10)}
        </span>
        <details open className="border-b border-gray-300">
          <summary className="outline-none list-none py-6 text-lg font-bold cursor-pointer relative flex justify-between rounded-lg select-none hover:text-gray-700 focus-visible:ring-4 focus-visible:ring-gray-100">
            {task.title}
          </summary>
          <article className="animate-slide-in">
            <p className="text-gray-500 mb-6">{task.content}</p>
          </article>
        </details>
        <div className="flex gap-5 mt-5">
          <Link
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900 transition-colors"
            to={`/update/${task._id}`}
          >
            Modifier
          </Link>
          <button
            onClick={handleDelete}
            className="ml-auto w-1/2 bg-red-800 text-white p-2 rounded font-semibold hover:bg-red-900 transition-colors"
          >
            Supprimer
          </button>
        </div>
      </section>
    </div>
  );
};

export default Detail;

// import React, { useEffect, useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";

// const Detail = () => {
//   const { id } = useParams();
//   const [task, setTask] = useState(null);
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://tasks-sigma-ten.vercel.app/tasks/${id}`)
//       .then((res) => res.json())
//       .then((data) =>
//         setTask(data))
//       .catch((err) => console.error(err));
//   }, [id]);

// const handleDelete = () => {
//   if (window.confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
//     fetch(`https://tasks-sigma-ten.vercel.app/tasks/${id}`, {
//       method: "DELETE",
//       headers: {
//         "x-user-id": localStorage.getItem("userId"),
//       },
//     })
//       .then(async (res) => {
//         const data = await res.json(); 

//         if (!res.ok) {

//           const message = data.msg || data.error || "Erreur inconnue";
//           throw new Error(message);
//         }


//         console.log("Succès :", data.message);
//         // alert(data.msg);
//         setMsg(data.message);

//        setTimeout(() => navigate("/"), 2000);
//       })
//       .catch((err) => {
//         console.error("Erreur:", err.message);
//         setMsg(err.message);
//         // alert(err.message); 
//       });
//   }
// };



//   if (!task) return <p>Chargement...</p>;

//   return (
//     <div>
//     <span>{msg}</span>
//       <section className="bg-white p-2 md:p-6 rounded-2xl border border-gray-300 max-w-xl mx-auto mt-[15vh]">
//         <span className="p-2 rounded-2xl bg-green-700 text-white">
//           {task.createdAt.slice(0, 10)}
//         </span>
//         <details open className="border-b border-gray-300">
//           <summary className="outline-none list-none py-6 text-lg font-bold cursor-pointer relative flex justify-between rounded-lg select-none hover:after:opacity-75 focus-visible:ring-4 focus-visible:ring-gray-100">
//             {task.title}
//           </summary>
//           <article className="animate-slide-in">
//             <p className="text-gray-500 mb-6">{task.content}</p>
//           </article>
//         </details>
//         <div className="flex gap-5 mt-5">
//           <Link
//             className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
//             to={`/update/${task._id}`}
//           >
//             Modifier
//           </Link>
//           <button
//             onClick={handleDelete}
//             className="ml-auto w-1/2 bg-red-800 text-white p-2 rounded font-semibold hover:bg-red-900"
//           >
//             Supprimer
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Detail;
