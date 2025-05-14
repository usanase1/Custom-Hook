import React, { useState, useEffect } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount) : 0;
  });
  useDocumentTitle(`Count: ${count}`);
  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white px-4">
      <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 tracking-tight text-center">
          Counter: <span className="text-yellow-300">{count}</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-300"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
