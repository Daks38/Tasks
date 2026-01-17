import React from 'react';

const Update = () => {
    return (
        <div>
            <main class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
    <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 class="text-4xl font-semibold">Mettre à jour une tâche</h1>
    </div>
    <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Titre"/>
        <input class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500" type="text" placeholder="Description"/>
        <div class="flex items-center">
            <button class="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900" type="submit">Ajouter</button>
        </div>
    </div>
</main>
        </div>
    );
};

export default Update;