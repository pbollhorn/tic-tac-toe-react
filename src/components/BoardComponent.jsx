import React, { useState, useEffect } from "react";
import CellComponent from "./CellComponent";

function BoardComponent() {
  // // State to store the joke
  // const [joke, setJoke] = useState('');

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
      <tr>
        <td>
          <CellComponent />
        </td>
        <td>
          <CellComponent />
        </td>
        <td>
          <CellComponent />
        </td>
      </tr>
      <tr>
        <td>
          <CellComponent />
        </td>
        <td>
          <CellComponent />
        </td>
        <td>
          <CellComponent />
        </td>
      </tr>
      <tr>
        <td>
          <CellComponent />
        </td>
        <td>
          <CellComponent />
        </td>
        <td>
          <CellComponent />
        </td>
      </tr>
    </table>
  );
}

export default BoardComponent;
