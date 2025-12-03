
import React, { useState } from "react";
import './../styles/App.css';
import GameBoard from "./GameBoard";

const App = () => {
  const [difficulty, setDifficulty] = useState("");
  const [start, setStart] = useState(false);

  const handleStart = () => {
    if (difficulty) setStart(true);
    else alert("Please select a difficulty level!");
  };

  return (
    <div className="app">
      {!start ? (
        <div className="levels_container">
          <h1>Welcome!</h1>
          <div>
            <label>
              <input
                type="radio"
                name="difficulty"
                id="easy"
                value="easy"
                onChange={(e) => setDifficulty(e.target.value)}
              />{" "}
              Easy
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                name="difficulty"
                value="normal"
                id="normal"
                onChange={(e) => setDifficulty(e.target.value)}
              />{" "}
              Normal
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                name="difficulty"
                value="hard"
                id="hard"
                onChange={(e) => setDifficulty(e.target.value)}
              />{" "}
              Hard
            </label>
          </div>
          <button style={{ marginTop: "20px" }} onClick={handleStart}>
            Start
          </button>
        </div>
      ) : (
        <GameBoard difficulty={difficulty} />
      )}
    </div>
  )
}

export default App
