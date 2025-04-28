import React, { useState } from "react";
import CellComponent from "./CellComponent";

function BoardComponent() {
  // State to store the board (0=blank, 1=cross, 2=nought))
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  // State to store player (1=cross, 2=nought)
  const [player, setPlayer] = useState(1);

  function handleClick(event) {
    const id = event.target.id;
    if (id.substring(0, 4) !== "cell") return;

    const row = parseInt(id.substring(4, 5));
    const col = parseInt(id.substring(5, 6));

    if (board[row][col] !== 0) return;

    const boardDeepCopy = board.map((row) => [...row]);
    boardDeepCopy[row][col] = player;
    setBoard(boardDeepCopy);
    
    setPlayer((player % 2) + 1);
  }

  // Render the board
  return (
    <table id="board" onClick={handleClick}>
      <tbody>
        <tr>
          <td>
            <CellComponent id="cell00" value={board[0][0]} />
          </td>
          <td>
            <CellComponent id="cell01" value={board[0][1]} />
          </td>
          <td>
            <CellComponent id="cell02" value={board[0][2]} />
          </td>
        </tr>
        <tr>
          <td>
            <CellComponent id="cell10" value={board[1][0]} />
          </td>
          <td>
            <CellComponent id="cell11" value={board[1][1]} />
          </td>
          <td>
            <CellComponent id="cell12" value={board[1][2]} />
          </td>
        </tr>
        <tr>
          <td>
            <CellComponent id="cell20" value={board[2][0]} />
          </td>
          <td>
            <CellComponent id="cell21" value={board[2][1]} />
          </td>
          <td>
            <CellComponent id="cell22" value={board[2][2]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BoardComponent;
