const cellPurgatory = ({currentBoard, side, cellIndex}) => {
    /**
     * Verify if the cell is alive or not
     * based on the liveness of the neighbours
     * Args:
     *      cellIndex: index of the cell in the cells
     * Returns:
     *      boolean
     */
    const cells = currentBoard.slice();
    let alive = 0; // number of alive cells nearby
    // check the 8-way neighbours of the cell
    for (let j = -1; j < 2; j++) {
        for (let k = -1; k < 2; k++) {
            if (j != 0 && k!= 0){
                if (cellIndex + j * side + k >= 0 && cellIndex + j * side + k < side * side) {
                    if (cells[cellIndex + j * side + k]) {
                        alive += 1;
                    }
                }
            }
        }
    }
    const cellIsAlive = ((cells[cellIndex] & alive < 2) || (cells[cellIndex] & alive > 3)) ? false : ( 
            !cells[cellIndex] & alive === 3 ? true : cells[cellIndex] 
        );
    return cellIsAlive;
}

export const nextGeneration = (state) => {
    const {currentBoard, side} = state;
    let changed = false;
    const newBoard = currentBoard.map((cell, index) => {
        const newCell = cellPurgatory({currentBoard, side, cellIndex: index});
        changed = changed || (newCell !== cell);
        return newCell;
    });
    return {newBoard, changed};
}