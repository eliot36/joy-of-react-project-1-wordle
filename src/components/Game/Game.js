import React, { useState } from "react";

import GuessList from "../GuessList";
import GuessInput from "../GuessInput";
import WinBanner from "../WinBanner";
import LoseBanner from "../LoseBanner";
import Keyboard from "../Keyboard";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gameResult, setGameResult] = useState(null);

  const checkUserWins = (newGuess) => {
    const hasCorrectAnswer = newGuess.every(
      ({ status }) => status === "correct"
    );

    if (hasCorrectAnswer) {
      setGameResult("win");
      return;
    }

    const isReachedMaxAllowed = guessList.length + 1 === NUM_OF_GUESSES_ALLOWED;

    if (isReachedMaxAllowed) {
      setGameResult("lose");
      return;
    }
  };

  return (
    <>
      <GuessList guessList={guessList} />

      <GuessInput
        disabled={!!gameResult}
        addGuess={(guess) => {
          const newGuess = checkGuess(guess, answer);

          setGuessList([...guessList, newGuess]);
          checkUserWins(newGuess);
        }}
      />

      <Keyboard guessList={guessList} />

      {gameResult === "win" && <WinBanner attemptCount={guessList.length} />}
      {gameResult === "lose" && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
