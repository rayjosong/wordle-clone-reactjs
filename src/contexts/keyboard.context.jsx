import { createContext, useContext, useState } from "react";
import { BoardContext } from "./board.context";
import { GameContext } from "./game.context";

export const KeyboardContext = createContext();

export const KeyboardProvider = ({ children }) => {
  const { board, setBoard } = useContext(BoardContext);

  const {
    currWord,
    setCurrWord,
    currentLetterPos,
    setCurrentLetterPos,
    currentAttempt,
    setCurrentAttempt,
    correctWord,
    gameOver,
    setGameOver,
    wordSet,
  } = useContext(GameContext);

  const onSelectKey = (keyVal) => {
    if (gameOver.gameOver) return;
    if (currentLetterPos > 4) return;

    const newBoard = [...board];

    newBoard[currentAttempt][currentLetterPos] = keyVal;
    setBoard(newBoard);
    setCurrentLetterPos(currentLetterPos + 1);

    // game logic
  };

  const onDeleteKey = () => {
    if (gameOver.gameOver) return;
    if (currentLetterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt][currentLetterPos - 1] = "";
    setBoard(newBoard);
    setCurrentLetterPos(currentLetterPos - 1);
  };

  const onEnterKey = () => {
    if (gameOver.gameOver) return;
    if (currentLetterPos !== 5) return;

    const newBoard = [...board];
    const currentGuess = newBoard[currentAttempt].join("");

    if (wordSet.has(currentGuess.toLowerCase())) {
      setCurrentLetterPos(0);
      setCurrentAttempt(currentAttempt + 1);
      setBoard(newBoard);
      setCurrWord(currentGuess);
    }

    // game logic

    // max attempt reached? -> gameOver.gameOver = true
    if (currentAttempt >= 4) {
      setGameOver({
        gameOver: true,
        guessedWord: false,
      });
    }

    // check if guessedWord is true -> gameOver.guessedWord = true
    if (currentGuess === correctWord) {
      setGameOver({
        gameOver: true,
        guessedWord: true,
      });
    }
  };

  const value = { onSelectKey, onDeleteKey, onEnterKey };
  return (
    <KeyboardContext.Provider value={value}>
      {children}
    </KeyboardContext.Provider>
  );
};
