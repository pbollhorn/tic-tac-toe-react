import React, { useState, useEffect } from "react";
import blank from "../assets/blank.png";
import cross from "../assets/cross.png";
import nought from "../assets/nought.png";

function CellComponent({ image, handleClick }) {
  // Render the cell
  return <img src={cross}></img>;
}

export default CellComponent;
