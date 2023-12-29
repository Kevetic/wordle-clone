import React, { useEffect, useState } from "react";

export default function Board({ guesses, correctGuess }) {
  const [correctTiles, setCorrectTiles] = useState(Array(5).fill(""));
  console.log(correctTiles);

  useEffect(() => {
    if (correctGuess) {
      keepCorrect();
    }
  }, [guesses]);

  const keepCorrect = () => {
    if (correctGuess) {
      correctTiles.map((x, idx) => {
        if (correctGuess.id == idx) {
          correctTiles[idx] = correctGuess.letters;
        }
      });
    }
    return (
      <div className={` flex`}>
        {correctTiles.map((x) => {
          return <div className={` border border-black p-10 m-1`}> {x}</div>;
        })}
      </div>
    );
  };

  //once a guess is made... fill in the row and highlight the corrected tiles, and keep the corrected tiles.

  return keepCorrect();

  // <div className="flex-col gap-10">
  //   {guesses &&
  //     guesses.map((guess, id) => {
  //       let splited = guess.split("");
  //       let mapSplit = splited.map((newGuess, idx) => {
  //         return (
  //           <div
  //             key={idx}
  //             className={` ${
  //               correctGuess == idx ? "bg-black" : "bg-transparent"
  //             } border border-black p-10 m-1`}
  //           >
  //             {newGuess}
  //           </div>
  //         );
  //       });
  //       return (
  //         <div key={id} className="flex text-3xl">
  //           {mapSplit}
  //         </div>
  //       );
  //     })}
  // </div>
}
