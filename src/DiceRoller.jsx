import { useState } from "react";

const DiceRoller = () => {
  const [value, setValue] = useState("🎲 Click to roll!");

  const rollDice = () => {
    const randomDice = "🎲 " + Math.floor(Math.random() * 6 + 1);
    setValue(randomDice);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
        <h1 className="text-3xl font-bold text-zinc-600 mb-6 drop-shadow-md">
          🎲 Dice Roller
        </h1>
        <button
          onClick={rollDice}
          className="bg-zinc-500 cursor-pointer hover:bg-zinc-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
        >
          Roll Dice
        </button>
        <p className="mt-6 text-2xl font-mono text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default DiceRoller;
