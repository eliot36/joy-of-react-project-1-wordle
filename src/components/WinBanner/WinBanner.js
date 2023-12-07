import React from "react";

function WinBanner({ attemptCount }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{attemptCount} guesses</strong>.
      </p>
    </div>
  );
}

export default WinBanner;
