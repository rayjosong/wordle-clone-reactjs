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
  const [correctWord, setCorrectWord] = useState("RIGHT");

  const value = {
    currentAttempt,
    currentLetterPos,
    setCurrentAttempt,
    setCurrentLetterPos,
    correctWord,
    setCorrectWord,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
