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
  const [correctGuess, setCorrectGuess] = useState();
  const [currentGuess, setCurrentGuess] = useState("");
  console.log(correctGuess);

  const answerMap = () => {
    console.log(answer);
    let map = new Map();
    let splited = answer.split("");

    splited.map((x, id) => map.set(id, x));
    setMatches(map);
  };

  // console.log("matches:", matches);
  // console.log("guesses:", guesses);

  const [answerArr, setAnswerArr] = useState([]);

  useEffect(() => {
    answerMap();
    setInput("");
  }, [guesses]);

  const handleClick = (guess) => {
    setCurrentGuess(guess);
    if (guess.length != 5 && count != 5) {
      alert("has to be 5 letters");
    } else if (count != 5) {
      setGuesses([...guesses, guess]);
      setCount((count) => count + 1);
    }

    let splitedGuess = guess.split("");
    splitedGuess.map((x, idx) => {
      let matchValues = Array.from(matches.values());
      if (matchValues.includes(x)) {
        const correctPosition = matchValues.indexOf(x) === idx;
        if (correctPosition) {
          setCorrectGuess({ letters: x, id: idx });
        }
      }
      console.log("didnt run:", x);
    });
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <Board
        guesses={guesses}
        correctGuess={correctGuess}
        answer={answer}
        currentGuess={currentGuess}
      />
      <div>{count}</div>
      <Guesses handleClick={handleClick} input={input} setInput={setInput} />
    </div>
  );
}

export default App;
