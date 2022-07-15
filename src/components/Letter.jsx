import React, { useContext, useEffect } from "react";
import { BoardContext } from "../contexts/board.context";

import { GameContext } from "../contexts/game.context";

function Letter({ attemptVal, letterPos }) {
  const { correctWord, currentAttempt } = useContext(GameContext);

  const { board } = useContext(BoardContext);
  const letter = board[attemptVal][letterPos];

  // checkCorrect?, almost? or error?

  const isCorrect = correctWord[letterPos] === letter;

  const isAlmost = !isCorrect && letter !== "" && correctWord.includes(letter);

  const hasSubmitted = currentAttempt > attemptVal;

  const letterState =
    hasSubmitted && isCorrect
      ? "correct"
      : hasSubmitted && isAlmost
      ? "almost"
      : "error";

  useEffect(() => {
    if (letter !== "" && !isCorrect && !isAlmost) {
      // setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
