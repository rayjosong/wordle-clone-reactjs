import { useEffect, useContext } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";

import Board from "./components/Board";

function App() {
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
