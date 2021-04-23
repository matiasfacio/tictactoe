import React, { useState } from "react";
import { isThereAWinner } from "./Winner";

function Main() {
  const [Winner, setWinner] = useState(["No", []]);
  const [NewGame, setNewGame] = useState(["", "", "", "", "", "", "", "", ""]);
  const [start, setStart] = useState(false);
  const [TheWinner, setTheWinner] = useState(["No", []]);
  const [activePlayer, setActivePlayer] = useState("O");
  let GameCopy = [...NewGame];
  const PlayerOneContent = "O";
  const PlayerTwoContent = "X";

  const updateGame = (e) => {
    GameCopy[+e.target.id] = activePlayer;
    setNewGame(GameCopy);
    activePlayer === "O"
      ? setActivePlayer(PlayerTwoContent)
      : setActivePlayer(PlayerOneContent);
    let Win = isThereAWinner(GameCopy);
    if (Win[0] !== "No") {
      setTheWinner(Win[0], Win[1]);
      setWinnerColor(Win[1]);
      setWinner(Win);
    }
  };

  const setWinnerColor = (arr) => {
    document.getElementById(arr[0]).style.color = "rgb(6, 156, 167)";
    document.getElementById(arr[1]).style.color = "rgb(6, 156, 167)";
    document.getElementById(arr[2]).style.color = "rgb(6, 156, 167)";
  };

  const StartNewGame = () => {
    setStart(!start);
    setNewGame(["", "", "", "", "", "", "", "", ""]);
    setTheWinner(["No", []]);
    setActivePlayer("O");
    setWinner(["No", []]);
  };

  return (
    <div className="mainContainer">
      <div className="header-left">
        <button
          onClick={() => {
            StartNewGame();
          }}
        >
          {!start
            ? "Start a new game"
            : Winner[0] !== "No"
            ? "Another game?"
            : "End Game"}
        </button>

        <div id="turn">
          {start && (
            <div id="turnText">
              Player: {activePlayer === "O" ? "One (O)" : "Two (X)"}{" "}
            </div>
          )}
        </div>
      </div>

      {start && (
        <div className="GameContainer">
          <div>
            <div id="firsRow" className="row">
              <div
                id="0"
                className="box"
                onClick={(e) =>
                  NewGame[0] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[0]}
              </div>
              <div className="divisorVertical"></div>
              <div
                id="1"
                className="box"
                onClick={(e) =>
                  NewGame[1] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[1]}
              </div>
              <div className="divisorVertical"></div>
              <div
                id="2"
                className="box"
                onClick={(e) =>
                  NewGame[2] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[2]}
              </div>
            </div>
            <div className="divisor"></div>
            <div id="secondRow" className="row">
              <div
                id="3"
                className="box"
                onClick={(e) =>
                  NewGame[3] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[3]}
              </div>
              <div className="divisorVertical"></div>
              <div
                id="4"
                className="box"
                onClick={(e) =>
                  NewGame[4] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[4]}
              </div>
              <div className="divisorVertical"></div>
              <div
                id="5"
                className="box"
                onClick={(e) =>
                  NewGame[5] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[5]}
              </div>
            </div>
            <div className="divisor"></div>
            <div id="thirdRow" className="row">
              <div
                id="6"
                className="box"
                onClick={(e) =>
                  NewGame[6] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[6]}
              </div>
              <div className="divisorVertical"></div>
              <div
                id="7"
                className="box"
                onClick={(e) =>
                  NewGame[7] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[7]}
              </div>
              <div className="divisorVertical"></div>
              <div
                id="8"
                className="box"
                onClick={(e) =>
                  NewGame[8] === "" && Winner[0] === "No" ? updateGame(e) : ""
                }
              >
                {NewGame[8]}
              </div>
            </div>
          </div>
          
        </div>
      )}
      <div className="theWinnerIs">
            {TheWinner[0] === "No"
              ? ""
              : `The Winner Is:${TheWinner[0]}`}
          </div>
    </div>
  );
}

export default Main;
