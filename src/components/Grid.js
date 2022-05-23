import React from "react";
import Square from "./Square";

function Grid(props) {
  const row = (width, indexRow) => {
    let row = [];
    for (let indexCol = 0; indexCol < width; indexCol++) {
      row.push(
        <Square
          key={`${indexRow}, ${indexCol}`}
          row={indexRow}
          col={indexCol}
        />,
      );
    }
    return row;
  };

  const getGrid = (width, height) => {
    let grid = [];
    for (let indexRow = 0; indexRow < height; indexRow++) {
      grid.push(
        <tr
          id={`${indexRow}`}
          key={indexRow}
          style={{ display: "flex", direction: "flex-row" }}
        >
          {row(width, indexRow)}
        </tr>,
      );
    }

    return grid;
  };

  return (
    <table>
      <tbody>{getGrid(props.width, props.height)}</tbody>
    </table>
  );
}

export default Grid;
