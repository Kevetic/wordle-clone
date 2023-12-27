import "./App.css";
import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import Guesses from "./components/Guesses/Guesses";
import { Word } from "./components/Words/Words";

function App() {
  let randomWrd = Math.floor(Math.random(Word) * Word.length);
  const [count, setCount] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(Word[randomWrd].toUpperCase());

  const [answerArr, setAnswerArr] = useState([]);

  useEffect(() => {
    setInput("");
  }, [guesses]);

  const handleClick = (guess) => {
    console.log("answer:", answer);
    let answerSplit = answer.split("");
    setAnswerArr(answerSplit.map((l) => l));
    console.log("this should be map:", answerArr);
    if (guess.length != 5 && count != 5) {
      alert("has to be 5 letters");
    } else if (count != 5) {
      // let guessSplit = guess.split("");
      // let guessMap = guessSplit.map((match) => match);
      // let correctLetter = answerMap.filter((item, idx) =>
      //   guessMap.includes(item, idx)
      // );
      // console.log(correctLetter);
      setGuesses([...guesses, guess]);
      setCount((count) => count + 1);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <Board guesses={guesses} />
      <div>{count}</div>
      <Guesses handleClick={handleClick} input={input} setInput={setInput} />
    </div>
  );
}

export default App;
