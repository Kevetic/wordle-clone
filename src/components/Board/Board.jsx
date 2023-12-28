import React, { useState } from "react";

export default function Board({ guesses, correctGuess }) {
  return (
    <div className="flex-col gap-10">
      {guesses &&
        guesses.map((guess, id) => {
          let splited = guess.split("");
          let mapSplit = splited.map((newGuess, idx) => {
            return (
              <div
                key={idx}
                className={` ${
                  correctGuess == idx ? "bg-black" : "bg-transparent"
                } border border-black p-10 m-1`}
              >
                {newGuess}
              </div>
            );
          });
          return (
            <div key={id} className="flex text-3xl">
              {mapSplit}
            </div>
          );
        })}
    </div>
  );
}
