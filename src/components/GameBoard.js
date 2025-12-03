import React, { useEffect, useState } from "react";

const difficultyMap = {
  easy: 4,    // 4 pairs → 8 tiles
  normal: 8,  // 8 pairs → 16 tiles
  hard: 16    // 16 pairs → 32 tiles
};

const columnsMap = {
  easy: 4,    // 8 tiles → 4 columns
  normal: 4,  // 16 tiles → 4 columns (4x4)
  hard: 8     // 32 tiles → 8 columns (8x4)
};

export default function GameBoard({ difficulty }) {
  const [tiles, setTiles] = useState([]);
  const [firstTile, setFirstTile] = useState(null);
  const [secondTile, setSecondTile] = useState(null);
  const [yoTries, setYoTries] = useState(0);

  useEffect(() => {
    initTiles();
  }, [difficulty]);

  const initTiles = () => {
    const pairs = difficultyMap[difficulty];
    let numbers = [];
    for (let i = 1; i <= pairs; i++) numbers.push(i, i); 
    numbers.sort(() => Math.random() - 0.5); 
    const initialTiles = numbers.map((num, idx) => ({
      id: idx,
      value: num,
      isFlipped: false,
      isMatched: false
    }));
    setTiles(initialTiles);
    setYoTries(0);
    setFirstTile(null);
    setSecondTile(null);
  };

  // const handleTileClick = (tile) => {
  //   if (tile.isFlipped || tile.isMatched) return;

  //   const newTiles = tiles.map((t) =>
  //     t.id === tile.id ? { ...t, isFlipped: true } : t
  //   );
  //   setTiles(newTiles);

  //   if (!firstTile) setFirstTile(tile);
  //   else if (!secondTile) {
  //     setSecondTile(tile);
  //     setYoTries((prev) => prev + 1);

  //     setTimeout(() => {
  //       if (firstTile.value === tile.value) {
  //         setTiles((prev) =>
  //           prev.map((t) =>
  //             t.value === tile.value ? { ...t, isMatched: true } : t
  //           )
  //         );
  //       } else {
  //         setTiles((prev) =>
  //           prev.map((t) =>
  //             t.id === firstTile.id || t.id === tile.id
  //               ? { ...t, isFlipped: false }
  //               : t
  //           )
  //         );
  //       }
  //       setFirstTile(null);
  //       setSecondTile(null);
  //     }, 800);
  //   }
  // };

  const handleTileClick = (tile) => {
  if (tile.isFlipped || tile.isMatched) return;

  const newTiles = tiles.map((t) =>
    t.id === tile.id ? { ...t, isFlipped: true } : t
  );
  setTiles(newTiles);

  if (!firstTile) {
    setFirstTile(tile);
  } else if (!secondTile) {
    setSecondTile(tile);
    setYoTries((prev) => prev + 1);

    const prevFirst = firstTile; // capture the current first tile
    const prevSecond = tile;     // the second tile clicked

    setTimeout(() => {
      if (prevFirst.value === prevSecond.value) {
        setTiles((prev) =>
          prev.map((t) =>
            t.value === prevFirst.value ? { ...t, isMatched: true } : t
          )
        );
      } else {
        setTiles((prev) =>
          prev.map((t) =>
            t.id === prevFirst.id || t.id === prevSecond.id
              ? { ...t, isFlipped: false }
              : t
          )
        );
      }
      setFirstTile(null);
      setSecondTile(null);
    }, 800);
  }
};

  const allMatched = tiles.every((tile) => tile.isMatched);

  return (
    <div className="game_container">
      <h2>Difficulty: {difficulty}</h2>
      <h4>Try to match all pairs!</h4>
      <h4>YoTries: {yoTries}</h4>
      <div
        className="cells_container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columnsMap[difficulty]}, 80px)`,
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >

        {tiles.map((tile) => (
          <div
            key={tile.id}
            onClick={() => handleTileClick(tile)}
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: tile.isFlipped || tile.isMatched ? "#61dafb" : "#333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "8px"
            }}
          >
            {tile.isFlipped || tile.isMatched ? tile.value : ""}
          </div>
        ))}
      </div>

      {allMatched && <h2 style={{ marginTop: "20px" }}>🎉 You Win! 🎉</h2>}
      <button style={{ marginTop: "20px" }} onClick={initTiles}>
        Restart
      </button>
    </div>
  );
}
