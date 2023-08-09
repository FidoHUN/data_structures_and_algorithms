/*
Backtracking = Return all solutions, as long as they are not violating any rules.

1) Create a function that solves any 9x9 sodoku!
*/

const getBoxId = function (row, col) {
    const rowVal = Math.floor(row / 3) * 3;
    const colVal = Math.floor(col / 3);

    return rowVal + colVal;
};

const isValid = function (box, row, col, num) {
    if (box.get(`${num}`) || row.get(`${num}`) || col.get(`${num}`)) {
        return false;
    } else {
        return true;
    }
};

const solveBacktrack = function (board, boxes, rows, cols, r, c) {
    if (r === board.length || c === board[0].length) {
        return true;
    } else {
        if (board[r][c] === '.') {
            for (let num = 1; num <= 9; num++) {
                const numVal = num.toString();
                board[r][c] = numVal;

                const boxId = getBoxId(r, c);
                const box = boxes[boxId];
                const row = rows[r];
                const col = cols[c];

                if (isValid(box, row, col, numVal)) {
                    box.set(numVal,true);
                    row.set(numVal,true);
                    col.set(numVal,true);

                    if (c === board[0].length - 1) {
                        if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
                            return true;
                        }
                    } else {
                        if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
                            return true;
                        }
                    }

                    box.delete(numVal);
                    row.delete(numVal);
                    col.delete(numVal);
                }
                board[r][c] = '.';
            }
        } else {
            if (c === board[0].length - 1) {
                if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
                    return true;
                }
            } else {
                if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
                    return true;
                }
            }
        }
    }

    return false;
};

var solveSudoku = function (board) {
    const n = board.length;
    const boxes = new Array(n),
        rows = new Array(n),
        cols = new Array(n);

    for (let i = 0; i < n; i++) {
        boxes[i] = new Map();
        rows[i] = new Map();
        cols[i] = new Map();
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] !== '.') {
                const boxId = getBoxId(r, c);
                const val = board[r][c];
                boxes[boxId].set(val,true);
                rows[r].set(val,true);
                cols[c].set(val,true);
            }
        }
    }

    solveBacktrack(board, boxes, rows, cols, 0, 0);
};

const printBoard = function(board){
    for(let i=0 ; i<board.length ; i++){
        console.log(JSON.stringify(board[i]));
    }
    console.log('-----------------------------------------');
};

const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

printBoard(board);
solveSudoku(board);
printBoard(board);
