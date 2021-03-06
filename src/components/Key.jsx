import { GameContext } from "../contexts/game.context";
import { useContext } from "react";
import { BoardContext } from "../contexts/board.context";
import { KeyboardContext } from "../contexts/keyboard.context";

function Key({ keyVal, bigKey, disabled }) {
  const { onEnterKey, onDeleteKey, onSelectKey } = useContext(KeyboardContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnterKey();
    } else if (keyVal === "DELETE") {
      onDeleteKey();
    } else {
      onSelectKey(keyVal);
    }
  };

  return (
    <div
      className={`key`}
      id={bigKey ? "big" : disabled ? "disabled" : ""}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
