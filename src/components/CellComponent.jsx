import React from "react";

function getImageSrc(value) {
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
  return <img id={id} src={getImageSrc(value)}></img>;
}

export default CellComponent;
