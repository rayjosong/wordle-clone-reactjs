import { createContext, useState } from "react";

export const GameContext = createContext({
  currentAttempt: 0,
  currentLetterPos: 0,
  setCurrentAttempt: () => {},
  setCurrentLetterPos: () => {},
});

export const GameProvider = ({ children }) => {
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [currentLetterPos, setCurrentLetterPos] = useState(0);

  const value = {
    currentAttempt,
    currentLetterPos,
    setCurrentAttempt,
    setCurrentLetterPos,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
