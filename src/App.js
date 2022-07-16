import { useEffect, useContext } from "react";
import "./App.css";

import Keyboard from "./components/Keyboard";
import Board from "./components/Board";

import generateWord from "./components/Word";

import { GameContext } from "./contexts/game.context";

function App() {
  const { correctWord, setCorrectWord } = useContext(GameContext);

  useEffect(() => {
    generateWord().then((word) => {
      setCorrectWord(word.word.toUpperCase());
    });
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game">
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
