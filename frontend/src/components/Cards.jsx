import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Cards = () => {
  const [tasks, setTasks] = useState([]);
  const Tall = () => {
    fetch("http://localhost:3000/tasks/")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur serveur");
       return response.json();
    })
      .then((result) => setTasks(result))
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    Tall();
  }, []);

  return (
   <div className="flex flex-wrap gap-10 justify-center">
  {tasks.map((task) => (
    <div
      key={task._id}
      className="w-[250px] h-auto bg-gradient-to-br from-white to-gray-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 rounded-2xl p-6 flex flex-col justify-between"
    >
      {/* Status badge */}
      <div className="flex justify-end">
        <span
          className="text-xs sm:text-sm px-3 py-1 rounded-full font-semibold rounded-2xl bg-green-600 text-white"
        >
          {task.createdAt.slice(0, 10)}
        </span>
      </div>

  
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-3 mb-2 text-center">
        {task.title}
      </h3>

      <p className="text-sm sm:text-base wrap-break-word text-gray-600 text-center mb-4 line-clamp-3">
        {task.content}
      </p>

      <Link
        to={`/details/${task._id}`}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-300 text-center"
      >
        Voir plus
      </Link>
    </div>
  ))}
</div>

  );
};

export default Cards;
