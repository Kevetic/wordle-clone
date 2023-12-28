import "./App.css";
import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import Guesses from "./components/Guesses/Guesses";
import { Word } from "./components/Words/Words";

function App() {
  let randomWrd = Math.floor(Math.random() * Word.length);
  const [count, setCount] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState(Word[randomWrd].toUpperCase());
  const [matches, setMatches] = useState();
  console.log(answer);

  const answerMap = () => {
    let map = new Map();
    let splited = answer.split("");

    splited.map((x, id) => map.set(id, x));
    setMatches(map);
  };

  console.log("matches:", matches);
  // console.log("guesses:", guesses);

  const [answerArr, setAnswerArr] = useState([]);

  useEffect(() => {
    answerMap();
    setInput("");
  }, [guesses]);

  const handleClick = (guess) => {
    if (guess.length != 5 && count != 5) {
      alert("has to be 5 letters");
    } else if (count != 5) {
      setGuesses([...guesses, guess]);
      setCount((count) => count + 1);
    }

    let splitedGuess = guess.split("");
    splitedGuess.map((x) => {
      let matchValues = Array.from(matches.values());
      let matchKeys = Array.from(matches.keys());
      console.log("here:", matchValues);
      if (matchValues.includes(x)) {
        console.log("it has:", x);
      }
      console.log("didnt run:", x);
    });
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
