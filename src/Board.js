import React from "react";
import Cell from "./Cell";

export default function Board(props) {
    function renderCell(cellIndex) {
        // the parent (board) renders the child (cell) component
        return (
            <Cell 
                color={props.cells[cellIndex] ? "black" : "white"} /* set the color of the cell */
                onClick={() => props.onClick(cellIndex)} /* call handleClick on a click on the cell */
                key={cellIndex} /* set the key of the cell */
            />

        );
    }
    // prepare board grid for rendering
    const board = [];
    for (let i = 0; i < props.side; i++) {
        const row = [];
        for (let j = 0; j < props.side; j++) {
            const idx = i * props.side + j;
            row.push(renderCell(idx));
        }
        board.push(<div className="board-row" key={"row" + i}>{row}</div>);
    }
    // render board
    return (
        <div className="board">
            {board}
        </div>
    );
}