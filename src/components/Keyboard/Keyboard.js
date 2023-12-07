import React, { useState } from "react";

function Keyboard({ guessList }) {
  const [guessStatusMap, setGuessStatusMap] = useState({});

  const keyRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const latestGuess = guessList.slice(-1)[0];

  latestGuess?.forEach(({ letter, status }) => {
    if (!guessStatusMap[letter]) {
      setGuessStatusMap({
        ...guessStatusMap,
        [letter]: status,
      });
    }
  });

  return (
    <div className="guess-results">
      {keyRows.map((row, rowIndex) => (
        <p key={rowIndex} className="guess">
          {row.map((key, keyIndex) => (
            <span key={keyIndex} className={"cell " + guessStatusMap[key]}>
              {key}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
