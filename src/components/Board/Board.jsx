import React, { useEffect, useState } from "react";

export default function Board({ guesses, correctGuess, answer, currentGuess }) {
  const [correctTiles, setCorrectTiles] = useState(Array(5).fill(""));
  const [board, setBoard] = useState(
    Array.from({ length: 5 }, () => Array(5).fill(""))
  );

  // console.log("board:", board);
  // console.log(guesses);

  useEffect(() => {
    if (correctGuess) {
      keepCorrect();
    }
  }, [guesses]);

  const keepCorrect = () => {
    if (correctGuess && answer !== currentGuess) {
      setBoard((prevBoard) => {
        const updatedBoard = [...prevBoard];

        updatedBoard[correctGuess.id] = correctTiles.map((tile, idx) =>
          idx === correctGuess.id ? correctGuess.letters : tile
        );

        for (let i = correctGuess.id + 1; i < 5; i++) {
          updatedBoard[i][correctGuess.id] = correctGuess.letters;
        }

        const currentRow = guesses[correctGuess.id].split("");
        currentRow.forEach((letter, colIndex) => {
          updatedBoard[correctGuess.id][colIndex] = letter;
        });

        return updatedBoard;
      });
    }
    if (answer === currentGuess) {
      alert("you win");
    }
  };

  return (
    <div className={`flex-row`}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex`}>
          {row.map((tile, colIndex) => (
            <div key={colIndex} className={`border border-black p-10 m-1`}>
              {tile}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
