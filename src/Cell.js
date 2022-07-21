import React from "react";
// exporting the cell component as a functional component
export default function Cell (props) {
    return (
        <button 
            className="cell"
            onClick={() => props.onClick()} /* call App.handleCellClick on a click on the cell */
            style={
                {
                    backgroundColor: props.color, 
                    width: '66px',
                    height: '66px',
                    border: '3px solid black',
                    borderRadius: '30%',
                }
            } /* set the background style of the cell button */
        >
        </button>
    );
}