// import { useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Header />

      <div>
        <Home />
        <div class="max-w-7xl mx-auto">
          <h1 class="text-4xl font-bold text-center mb-12 text-gray-800">
            Mes tâches
          </h1>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* <!-- Product Card 1 --> */}
            <div class="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div class="relative overflow-hidden h-80">
                <div class="absolute inset-0 from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute top-4 right-4">
                  <button class="bg-white/90 text-gray-800 p-2 rounded-full shadow-md transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500 hover:text-white">
                    <i class="fas fa-heart"></i>
                  </button>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button class="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center gap-2">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
                <span class="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse-slow">
                  NEW
                </span>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-lg font-bold text-gray-800">
                      Premium Smart Watch
                    </h3>
                    <p class="text-gray-500 text-sm">
                      Fitness Tracker, Heart Rate Monitor
                    </p>
                  </div>
                </div>
                <div class="mt-3 flex items-center">
                  <div class="flex text-yellow-400">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
