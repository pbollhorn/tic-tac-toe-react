import React from "react";

function getImageSrcForValue(value) {
  switch (value) {
    case 0:
      return "../public/blank.png";

    case 1:
      return "../public/cross.png";

    case 2:
      return "../public/nought.png";
  }
}

function CellComponent({ id, value }) {
  // Render the cell
  return <img id={id} src={getImageSrcForValue(value)}></img>;
}

export default CellComponent;
