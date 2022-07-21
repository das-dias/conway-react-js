import React from "react";
import logo from './logo.svg';
import './App.css';
import  Controls from './Controls';
import Board from './Board';
import { nextGeneration } from "./conway-rules";

function App() {
  const [side, setSide] = React.useState(7);
  const [currentBoard, setCurrentBoard] = React.useState(Array(side*side).fill(false));
  const [generation, setGeneration] = React.useState(0);
  const [boardChanged, setBoardChanged] = React.useState(false);
  const [history, setHistory] = React.useState([]);
  const handleClickCell = (cellIndex) => {
    /**
     * Handle a click on a cell
     * Args:
     *     cellIndex: index of the cell in the cells
     * Returns:
     *    none
     */
    const cells = currentBoard.slice();
    cells[cellIndex] = !cells[cellIndex];
    setCurrentBoard(cells);
  }

  const handleResetBoard = () => {
    /**
     * Handle a click on the reset button
     * Args:
     *  
     * Returns:
     *   none
     * */
    setCurrentBoard(Array(side*side).fill(false));
    setGeneration(0);
    setBoardChanged(false);
  }

  const handleNextGeneration = () => {
    setGeneration(
      (generation) => {
        return generation + 1;
      }
    );
    const newState = nextGeneration({currentBoard, side});
    const {newBoard, hasChanged} = newState;
    const newHistory = history.slice().concat(
      [{
        board: currentBoard.slice(),
        generation: generation,
      }]
    );
    setHistory(newHistory);
    setCurrentBoard(newBoard);
    setBoardChanged(hasChanged);
  }

  const handlePreviousGeneration = () => {
    const previousHistory = history.pop() || {board: currentBoard, generation: generation}; // catching the case when there is no history
    setCurrentBoard(previousHistory.board);
    setGeneration(previousHistory.generation);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Come Learn React
        </a>
        {/* render game engine into the main front-end */}
        <Controls className="controls"
          side={side}
          generation={generation}
          currentBoard={currentBoard}
          boardChanged={boardChanged}
          handleResetBoard={handleResetBoard}
          handleNextGeneration={handleNextGeneration}
          handlePreviousGeneration={handlePreviousGeneration}
          key={"controls"}
        />
        <Board className="board"
          side={side}
          cells={currentBoard}
          onClick={handleClickCell}
          key= {"board"}
        />
      </header>
    </div>
  );
}



export default App;
