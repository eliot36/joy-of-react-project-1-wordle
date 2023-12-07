import React from "react";

import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guessList }) {
  const guesses = [...guessList];
  const emptyGuessCount = NUM_OF_GUESSES_ALLOWED - guesses.length;

  if (emptyGuessCount > 0) {
    guesses.push(...new Array(emptyGuessCount).fill(null));
  }

  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
    </div>
  );
}

export default GuessList;
