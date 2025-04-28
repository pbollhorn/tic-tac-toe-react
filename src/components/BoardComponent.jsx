import React, { useState, useEffect } from "react";
import CellComponent from "./CellComponent";

function BoardComponent() {
  // State to store the board
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  // // useEffect to fetch the joke
  // useEffect(() => {
  //     fetch('https://api.chucknorris.io/jokes/random')
  //         .then(response => response.json())
  //         .then(data => setJoke(data.value))
  //         .catch(error => console.error('Error fetching joke:', error));
  // }, []); // Empty dependency array means this runs once on mount

  // Render the board
  return (
    <table id="board">
      <tbody>
        <tr>
          <td>
            <CellComponent value={board[0][0]} />
          </td>
          <td>
            <CellComponent value={board[0][1]} />
          </td>
          <td>
            <CellComponent value={board[0][2]} />
          </td>
        </tr>
        <tr>
          <td>
            <CellComponent value={board[1][0]} />
          </td>
          <td>
            <CellComponent value={board[1][1]} />
          </td>
          <td>
            <CellComponent value={board[1][2]} />
          </td>
        </tr>
        <tr>
          <td>
            <CellComponent value={board[2][0]} />
          </td>
          <td>
            <CellComponent value={board[2][1]} />
          </td>
          <td>
            <CellComponent value={board[2][2]} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BoardComponent;
