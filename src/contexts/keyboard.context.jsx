import { createContext, useContext, useState } from "react";
import { BoardContext } from "./board.context";
import { GameContext } from "./game.context";

export const KeyboardContext = createContext();

export const KeyboardProvider = ({ children }) => {
  const { board, setBoard } = useContext(BoardContext);

  const {
    currentLetterPos,
    setCurrentLetterPos,
    currentAttempt,
    setCurrentAttempt,
  } = useContext(GameContext);

  const onSelectKey = (keyVal) => {
    if (currentLetterPos > 4) return;

    const newBoard = [...board];

    newBoard[currentAttempt][currentLetterPos] = keyVal;
    setBoard(newBoard);
    setCurrentLetterPos(currentLetterPos + 1);

    // game logic
  };

  const onDeleteKey = () => {
    if (currentLetterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt][currentLetterPos - 1] = "";
    setBoard(newBoard);
    setCurrentLetterPos(currentLetterPos - 1);
  };

  const onEnterKey = () => {
    if (currentLetterPos !== 5) return;

    setCurrentLetterPos(0);
    setCurrentAttempt(currentAttempt + 1);

    const newBoard = [...board];
    setBoard(newBoard);

    // game logic
  };

  const value = { onSelectKey, onDeleteKey, onEnterKey };
  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
};
