import React, { useContext } from "react";
import { GameContext } from "../contexts/game.context";

function GameOver() {
  const { gameOver, correctWord, currentAttempt } = useContext(GameContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord ? "You guessed the word correctly" : "You failed"}
      </h3>

      <h1>Correct: {correctWord}</h1>

      {gameOver.guessedWord && (
        <h3>You guessed in {currentAttempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
