import { useEffect, useContext } from "react";
import "./App.css";

import Keyboard from "./components/Keyboard";
import Board from "./components/Board";

import { generateWord, generateWordSet } from "./components/Word";

import { GameContext } from "./contexts/game.context";
import GameOver from "./components/GameOver";

function App() {
  const { correctWord, setCorrectWord, gameOver, setWordSet } =
    useContext(GameContext);

  useEffect(() => {
    generateWord().then((word) => {
      setCorrectWord(word.word.toUpperCase());
    });

    generateWordSet().then((words) => setWordSet(words.wordSet));
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game">
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </div>
    </div>
  );
}

export default App;
