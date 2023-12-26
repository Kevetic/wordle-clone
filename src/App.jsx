import "./App.css";
import { useState } from "react";
import Board from "./components/Board/Board";
import Guesses from "./components/Guesses/Guesses";

function App() {
  const [count, setCount] = useState(0);
  const [guesses, setGuesses] = useState([]);

  const handleClick = (guess) => {
    if (guess.length < 5 && count != 5) {
      alert("has to be 5 letters");
    } else if (count != 5) {
      setGuesses([...guesses, guess]);
      setCount((count) => count + 1);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <Board guesses={guesses} />
      <div>{count}</div>
      <Guesses handleClick={handleClick} />
    </div>
  );
}

export default App;
