
// import React, { useState } from "react";
// import './../styles/App.css';
// import GameBoard from "./GameBoard";

// const App = () => {
//   const [difficulty, setDifficulty] = useState("");
//   const [start, setStart] = useState(false);

//   const handleStart = () => {
//     if (difficulty) setStart(true);
//     else alert("Please select a difficulty level!");
//   };

//   return (
//     <div className="app">
//       {!start ? (
//         <div className="levels_container">
//           <h1>Welcome!</h1>
//           <h4>Select a difficulty to start the game</h4>
//           <div>
//             <input type="radio" name="difficulty" id="easy" value="easy" onChange={(e) => setDifficulty(e.target.value)} />
//             <label htmlFor="easy">Easy</label>
//           </div>

//           <div>
//             <input type="radio" name="difficulty" id="normal" value="normal" onChange={(e) => setDifficulty(e.target.value)} />
//             <label htmlFor="normal">Normal</label>
//           </div>

//           <div>
//             <input type="radio" name="difficulty" id="hard" value="hard" onChange={(e) => setDifficulty(e.target.value)} />
//             <label htmlFor="hard">Hard</label>
//           </div>

//           <button style={{ marginTop: "20px" }} onClick={handleStart}>
//             Start
//           </button>
//         </div>
//       ) : (
//         <GameBoard difficulty={difficulty} />
//       )}
//     </div>
//   )
// }

// export default App


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
          <h4>Select a difficulty to start the game</h4>

          <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
            <input type="radio" name="difficulty" id="easy" value="easy" onChange={(e) => setDifficulty(e.target.value)} />
            <label htmlFor="easy" style={{ marginLeft: "5px" }}>Easy</label>
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
            <input type="radio" name="difficulty" id="normal" value="normal" onChange={(e) => setDifficulty(e.target.value)} />
            <label htmlFor="normal" style={{ marginLeft: "5px" }}>Normal</label>
          </div>

          <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
            <input type="radio" name="difficulty" id="hard" value="hard" onChange={(e) => setDifficulty(e.target.value)} />
            <label htmlFor="hard" style={{ marginLeft: "5px" }}>Hard</label>
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

export default App;
