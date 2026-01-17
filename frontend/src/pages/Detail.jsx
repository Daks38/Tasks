import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((err) => console.error(err));
  }, [id]);
  if (!task) return <p>Chargement...</p>;
  return (
    <div>
      <section class="bg-white p-2 md:p-6 rounded-2xl border border-gray-300 max-w-xl mx-auto mt-[15vh]">
        <span className="p-2 rounded-2xl bg-green-700 text-white">{task.status}</span>
        <details open class="border-b border-gray-300">
          <summary class="outline-none list-none py-6 text-lg font-bold cursor-pointer relative flex justify-between rounded-lg select-none hover:after:opacity-75 focus-visible:ring-4 focus-visible:ring-gray-100 after:content-[''] after:absolute after:right-0 after:top-6 after:h-6 after:w-6 after:bg-[url('data:image/svg+xml;charset=UTF-8,<svg class=\'w-6 h-6\' fill=\'none\' stroke=\'currentColor\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'></path></svg>')] after:opacity-40 after:transition-transform after:duration-150 after:ease">
            {task.title}
          </summary>
          <article class="animate-slide-in">
            <p class="text-gray-500 mb-6">{task.content}</p>
          </article>
        </details>
      </section>
    </div>
  );
};

export default Detail;
