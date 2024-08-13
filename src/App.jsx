import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([{ num: 0 }]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const add = () => {
    if (num < 150) {
      const newNum = num + 1;
      const newHistory = history.slice(0, currentIndex + 1);
      newHistory.push({ num: newNum });
      setHistory(newHistory);
      setNum(newNum);
      setCurrentIndex(newHistory.length - 1);
    }
  };

  const subtract = () => {
    if (num > 0) {
      const newNum = num - 1;
      const newHistory = history.slice(0, currentIndex + 1);
      newHistory.push({ num: newNum });
      setHistory(newHistory);
      setNum(newNum);
      setCurrentIndex(newHistory.length - 1);
    }
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setNum(history[currentIndex - 1].num);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setNum(history[currentIndex + 1].num);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-xl font-bold mb-4">Number: {num}</h1>
        <div className="flex gap-4 mb-4">
          <button
            onClick={subtract}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Subtract 1
          </button>
          <button
            onClick={add}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Add 1
          </button>
        </div>
        <div className="w-full mb-4">
          <div className="relative w-full bg-gray-700 h-4 rounded">
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 rounded transition-all duration-500"
              style={{ width: `${(num / 150) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={undo}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Undo
          </button>
          <button
            onClick={redo}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
