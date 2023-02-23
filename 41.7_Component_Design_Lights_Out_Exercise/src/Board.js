import React, { useState } from "react";
import "./Board.css";
import Cell from "./Cell";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) {
    const [board, setBoard] = useState(createBoard);

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
    function createBoard() {
        return Array.from({ length: nrows }).map(
            row => Array.from({ length: ncols }).map(
                cell => Math.random() < chanceLightStartsOn
            )
        );
    }

    /** Check if the player has won */
    function hasWon() {
        return board.every(row => row.every(cell => !cell));
    }

    /** Flip cells around a given cell */
    function flipCellsAround(coord) {
        setBoard(oldBoard => {
            const [y, x] = coord.split("-").map(Number);

            const flipCell = (y, x, boardCopy) => {
                // if this coord is actually on board, flip it

                if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                    boardCopy[y][x] = !boardCopy[y][x];
                }
            };

            /* Create a deep copy of the current board  to create a new reference for the current [] that is the initial state*/

            const boardCopy = oldBoard.map(row => [...row]);

            /* updates the state of the cell that is clicked and that of all adjacents cells (not those that are adjacent diagonally, however)  and returns the the board for updating the board's state*/

            flipCell(y, x, boardCopy);
            flipCell(y, x - 1, boardCopy);
            flipCell(y, x + 1, boardCopy);
            flipCell(y - 1, x, boardCopy);
            flipCell(y + 1, x, boardCopy);

            return boardCopy;
        });
    }

    // if the game is won, just show a winning msg & render nothing else if the value of hasWon() is true

    if (hasWon()) {
        return <div>You're the winner!.</div>;
    }

    // Creates a boad based on a table whose rows are populdated by cells using nested loops.

    let tblBoard = [];

    for (let y = 0; y < nrows; y++) {
        let row = [];
        for (let x = 0; x < ncols; x++) {
            let coord = `${y}-${x}`;
            row.push(
                <Cell
                    key={coord}
                    isLit={board[y][x]}
                    flipCellsAroundMe={evt => flipCellsAround(coord)}
                />,
            );
        }
        tblBoard.push(<tr key={y}>{row}</tr>);
    }

    return (
        <table className="Board">
            <tbody>{tblBoard}</tbody>
        </table>
    );
}

export default Board;
