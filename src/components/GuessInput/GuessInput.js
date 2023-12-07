import React, { useState } from "react";

function GuessInput({ disabled, addGuess }) {
  const [guessInput, setGuessInput] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        addGuess(guessInput);
        setGuessInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>

      <input
        id="guess-input"
        type="text"
        value={guessInput}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="Please enter 5 letters only"
        disabled={disabled}
        onChange={(event) => {
          setGuessInput(event.target.value?.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
