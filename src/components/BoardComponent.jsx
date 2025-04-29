import React, { useState } from "react";
import CellComponent from "./CellComponent";

function BoardComponent() {
  // The board is represented by a 1D array, whose indexes represents the 2D board like this:
  // 0 | 1 | 2
  // ----------
  // 3 | 4 | 5
  // ----------
  // 6 | 7 | 8

  // State to store the board (0=blank, 1=cross, 2=nought))
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  // State to store player (1=cross, 2=nought)
  const [player, setPlayer] = useState(1);

  function handleClick(event) {
    const id = event.target.id;
    if (id.substring(0, 4) !== "cell") return;

    const cellNumber = parseInt(id.substring(4, 5));
    if (board[cellNumber] !== 0) return;

    const boardDeepCopy = [...board];
    boardDeepCopy[cellNumber] = player;
    setBoard(boardDeepCopy);

    setPlayer((player % 2) + 1);
  }

  // Render the board
  return (
    <table id="board" onClick={handleClick}>
      <tbody>
        <tr>
          <td>
            <CellComponent id="cell0" value={board[0]} />
          </td>
          <td>
            <CellComponent id="cell1" value={board[1]} />
          </td>
          <td>
            <CellComponent id="cell2" value={board[2]} />
          </td>
        </tr>
        <tr>
          <td>
            <CellComponent id="cell3" value={board[3]} />
          </td>
          <td>
            <CellComponent id="cell4" value={board[4]} />
          </td>
          <td>
            <CellComponent id="cell5" value={board[5]} />
          </td>
        </tr>
        <tr>
          <td>
            <CellComponent id="cell6" value={board[6]} />
          </td>
          <td>
            <CellComponent id="cell7" value={board[7]} />
          </td>
          <td>
            <CellComponent id="cell8" value={board[8]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BoardComponent;
