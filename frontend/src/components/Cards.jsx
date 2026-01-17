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
    <div className="flex gap-14">
      {tasks.map(task =>(<div key={task.id}
      className="w-[100px] hover:scale-[1.1] h-[125px] sm:w-[200px] sm:h-[225px] gap-1 md:gap-4 flex flex-col  px-2 py-3 justify-center items-center bg-white  bg-opacity-30 rounded-[25px]">
      <div className="flex justify-end">
        <span className="text-sm text-center rounded-2xl font-regular bg-green-600 p-1 text-[#ffffff] sm:text-sm  ">{task.status}</span>
      </div>
      <h3 className="text-base capitalize  font-black text-black sm:text-[28px]">{task.title}</h3>
      <p className="text-sm text-center font-regular  text-[#A4A4A5] sm:text-xl  ">{task.content}</p>
      <Link to={`/details/${task._id}`} className="bg-blue-500 text-gray-800 px-6 py-3 rounded-sm shadow hover:bg-blue-900 transition"
              >
                Voir plus
              </Link>
    </div>))}
    </div>
  );
};

export default Cards;
