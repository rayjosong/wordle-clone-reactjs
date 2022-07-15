import { boardDefault } from "../components/Letter";

import { createContext, useState, useEffect } from "react";

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault);
  const [corrWord, setCorrWord] = useState("right");

  // const API_URL = "https://random-word-api.herokuapp.com/word?length=5";

  // useEffect(() => {
  //   const fetchWord = async () => {
  //     const response = await fetch(API_URL);
  //     const words = await response.json();
  //     const randomWord = words[Math.floor(Math.random() * words.length)];
  //     console.log(randomWord);

  //     setCorrWord(randomWord);
  //   };
  //   fetchWord();
  // }, []);

  const value = { board, setBoard };
  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardProvider;
