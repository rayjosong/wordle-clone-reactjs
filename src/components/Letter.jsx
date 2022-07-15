import React, { useContext } from "react";
import { BoardContext } from "../contexts/board.context";

function Letter({ attemptVal, letterPos }) {
  const { board } = useContext(BoardContext);
  const letter = board[attemptVal][letterPos];

  return <div className="letter">{letter}</div>;
}

export default Letter;

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
