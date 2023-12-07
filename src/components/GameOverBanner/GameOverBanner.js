import React from "react";

function GameOverBanner({ resetGame }) {
  return (
    <div className="reset banner">
      <p onClick={resetGame} style={{ textAlign: "center", cursor: "pointer" }}>
        Restart Game
      </p>
    </div>
  );
}

export default GameOverBanner;
