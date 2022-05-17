import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function moveToSide(board, left) {
    for (let i = 0; i < 10; i++) {
        if (left) {
            board.moveLeft();
        } else {
            board.moveRight();
        }
    }
}

function fallToBottom(board) {
    for (let i = 0; i < 10; i++) {
        board.tick();
    }
}

describe("Moving falling tetrominoes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.T_SHAPE);
    }
    );

    it("a falling tetromino can be moved left", () => {
        board.moveLeft();
        expect(board.toString()).to.equalShape(
            `...T......
             ..TTT.....
             ..........
             ..........
             ..........
             ..........`
        );
    });

    it("a falling tetromino can be moved right", () => {
        board.moveRight();
        expect(board.toString()).to.equalShape(
            `.....T....
             ....TTT...
             ..........
             ..........
             ..........
             ..........`
        );
    });

    it("a falling tetromino can be moved down", () => {
        board.moveDown();
        expect(board.toString()).to.equalShape(
            `..........
             ....T.....
             ...TTT....
             ..........
             ..........
             ..........`
        );
    });

    it("it cannot be moved left beyond the board", () => {
        moveToSide(board, true);
        expect(board.toString()).to.equalShape(
            `.T........
             TTT.......
             ..........
             ..........
             ..........
             ..........`
        );
    });

    it("it cannot be moved right beyond the board", () => {
        moveToSide(board, false);
        expect(board.toString()).to.equalShape(
            `........T.
             .......TTT
             ..........
             ..........
             ..........
             ..........`
        );
    });

    it("it cannot be moved down beyond the board (will stop falling)", () => {
        fallToBottom(board);
        expect(board.toString()).to.equalShape(
            `..........
             ..........
             ..........
             ..........
             ....T.....
             ...TTT....`
        );
    });
});


