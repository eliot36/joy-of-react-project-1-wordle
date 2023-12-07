import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {(guess || new Array(5).fill({})).map(({ letter, status }, index) => (
        <span key={index} className={"cell " + status}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
