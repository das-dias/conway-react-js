import React from "react";
import Board from './Board';

export default function Controls (props) {
    const {currentBoard, handleResetBoard, handleNextGeneration, handlePreviousGeneration} = props
    const handleNext = () => {
       handleNextGeneration(currentBoard)
    };
    const handlePrevious = () => {
        handlePreviousGeneration(currentBoard) // the controls call back to an handler in the main engine (App.js/App.handle...)
    };
    return (
        <div className="engine"
            data-testid="engine"
        >
            <div className="engine-header">
                <div className="engine-header-title">
                    <h1> Conway's Game of Life </h1>
                    <h2> Generation: {props.generation} </h2>
                    <h3> Board Size: {props.side} by {props.side} </h3>
                </div>
                <div className="engine-board-controls">
                    <button 
                        onClick={handleResetBoard}
                        style={{
                            backgroundColor: '#eeeee',
                            width: '150px',
                            height: '56px',
                            border: '3px solid black',
                            borderRadius: '7%',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Reset Cells
                    </button>
                    <button onClick={handlePrevious}
                        style={{
                            backgroundColor: '#eeeee',
                            width: '150px',
                            height: '56px',
                            border: '3px solid black',
                            borderRadius: '7%',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Previous Generation
                    </button>
                    <button onClick={handleNext}
                        style={{
                            backgroundColor: '#eeeee',
                            width: '150px',
                            height: '56px',
                            border: '3px solid black',
                            borderRadius: '7%',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Next Generation
                    </button>
                </div>
            </div>
        </div>
    );
}

