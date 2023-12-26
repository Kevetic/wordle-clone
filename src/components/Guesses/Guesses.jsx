import React, { useState } from "react";

export default function Guesses({ handleClick }) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        className="border border-black"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleClick(input)}>SUBMIT</button>
    </div>
  );
}
