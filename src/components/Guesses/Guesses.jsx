import React, { useState } from "react";

export default function Guesses({ handleClick, input, setInput }) {
  return (
    <div>
      <input
        className="border border-black"
        value={input}
        onChange={(e) =>
          setInput(e.target.value.replace(/\s/g, "").toUpperCase())
        }
      />
      <button onClick={() => handleClick(input)}>SUBMIT</button>
    </div>
  );
}
