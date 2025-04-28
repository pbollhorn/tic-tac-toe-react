import React, { useState, useEffect } from "react";
import blank from "../assets/blank.png";
import cross from "../assets/cross.png";
import nought from "../assets/nought.png";

function getImageForValue(value) {
  switch (value) {
    case 0:
      return blank;
      break;

    case 1:
      return cross;
      break;

    case 2:
      return nought;
      break;
  }
}

function CellComponent({ value, handleClick }) {
  // Render the cell
  return <img src={getImageForValue(value)}></img>;
}

export default CellComponent;
