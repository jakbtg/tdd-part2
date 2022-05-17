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

describe("Rotating falling tetrominoes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.T_SHAPE);
    }
    );

    it("a falling tetromino can be rotated right/clockwise", () => {
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `....T.....
             ....TT....
             ....T.....
             ..........
             ..........
             ..........`
        );
    });

    it("a falling tetromino can be rotated left/counter-clockwise", () => {
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `....T.....
             ...TT.....
             ....T.....
             ..........
             ..........
             ..........`
        );
    });

});

describe("Rotating falling tetrominoes when there is no space to rotate, because of other blocks", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.O_SHAPE);
        moveToSide(board, true);
        fallToBottom(board);
        board.drop(Tetromino.O_SHAPE);
        board.moveLeft();
        board.moveLeft();
        fallToBottom(board);
        board.drop(Tetromino.O_SHAPE);
        board.moveLeft();
        board.moveLeft();
        fallToBottom(board);

        board.drop(Tetromino.I_SHAPE);
        board.rotateRight();
    }
    );

    it("cannot rotate right/clockwise", () => {
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `....I.....
             ....I.....
             ..OOI.....
             ..OOI.....
             OOOO......
             OOOO......`
        );
    });

    it("cannot rotate left/counter-clockwise", () => {
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `....I.....
             ....I.....
             ..OOI.....
             ..OOI.....
             OOOO......
             OOOO......`
        );
    });

});