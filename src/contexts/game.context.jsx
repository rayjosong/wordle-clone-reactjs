import { createContext, useState } from "react";

export const GameContext = createContext({
  currentAttempt: 0,
  setCurrentAttempt: () => {},
  currentLetterPos: 0,
  setCurrentLetterPos: () => {},
  correctWord: "RIGHT",
  setCorrectWord: () => {},
});

export const GameProvider = ({ children }) => {
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [currentLetterPos, setCurrentLetterPos] = useState(0);
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [currWord, setCurrWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  const [wordSet, setWordSet] = useState();
  const value = {
    currentAttempt,
    currentLetterPos,
    setCurrentAttempt,
    setCurrentLetterPos,
    correctWord,
    setCorrectWord,
    disabledLetters,
    setDisabledLetters,
    currWord,
    setCurrWord,
    gameOver,
    setGameOver,
    wordSet,
    setWordSet,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
