import { GameContext } from "../contexts/game.context";
import { useContext } from "react";
import { BoardContext } from "../contexts/board.context";

function Key({ keyVal, bigKey }) {
  const {
    currentAttempt,
    setCurrentAttempt,
    currentLetterPos,
    setCurrentLetterPos,
  } = useContext(GameContext);

  const { board, setBoard } = useContext(BoardContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      if (currentLetterPos !== 5) return;

      setCurrentAttempt(currentAttempt + 1);
      setCurrentLetterPos(0);
    } else if (keyVal === "DELETE") {
      if (currentLetterPos === 0) return;
      const newBoard = [...board];
      newBoard[currentAttempt][currentLetterPos - 1] = "";
      setBoard(newBoard);
      setCurrentLetterPos(currentLetterPos - 1);
    } else {
      if (currentLetterPos > 4) return;
      console.log(currentAttempt);
      console.log(currentLetterPos);
      const newBoard = [...board];
      newBoard[currentAttempt][currentLetterPos] = keyVal;
      setBoard(newBoard);
      setCurrentLetterPos(currentLetterPos + 1);
    }
  };

  return (
    <div className={`key`} id={bigKey ? "big" : ""} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
