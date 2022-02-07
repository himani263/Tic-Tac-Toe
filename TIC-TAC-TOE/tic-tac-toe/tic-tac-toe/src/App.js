                // Name-Himani Garg, Roll No.-1910991946
import "./App.css";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Patterns";

function App() {
  
  const [cnboard, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [cnplayer, setPlayer] = useState("O");
  const [cnresult, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (cnplayer == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [cnboard]);

  useEffect(() => {
    if (cnresult.state != "none") {
      alert(`Game Finished! Winning Player: ${cnresult.winner}`);
      restartGame();
    }
  }, [cnresult]);

  const chooseSquare = (cnsquare) => {
    setBoard(
      cnboard.map((val, idx) => {
        if (idx == cnsquare && val == "") {
          return cnplayer;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((cncurrPattern) => {
      const frstPlayer = cnboard[cncurrPattern[0]];
      if (frstPlayer == "") return;
      let foundWinningPattern = true;
      cncurrPattern.forEach((idx) => {
        if (cnboard[idx] != frstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: cnplayer, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    cnboard.forEach((cnsquare) => {
      if (cnsquare == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square
            val={cnboard[0]} chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={cnboard[1]} chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={cnboard[2]}
            chooseSquare={() => { chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={cnboard[3]} chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square val={cnboard[4]} chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={cnboard[5]} chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={cnboard[6]} chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={cnboard[7]} chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={cnboard[8]} chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
