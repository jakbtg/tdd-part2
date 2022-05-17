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
    });

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

describe("Rotating falling tetrominoes when there is no space to rotate", () => {
    let board;
    beforeEach(() => {
        board = new Board(11, 7);
        board.drop(Tetromino.O_SHAPE);
        board.moveLeft();
        board.moveLeft();
        fallToBottom(board);
        board.drop(Tetromino.O_SHAPE);
        board.moveLeft();
        board.moveLeft();
        fallToBottom(board);
        board.drop(Tetromino.O_SHAPE);
        board.moveRight();
        fallToBottom(board);
        board.drop(Tetromino.O_SHAPE);
        board.moveRight();
        fallToBottom(board);

        board.drop(Tetromino.I_SHAPE);
    });

    it("cannot rotate right/clockwise because of other blocks", () => {
        board.rotateRight();
        board.tick();
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `...........
             .....I.....
             .....I.....
             ...OOIOO...
             ...OOIOO...
             ...OO.OO...
             ...OO.OO...`
        );
    });

    it("cannot rotate left/counter-clockwise because of other blocks", () => {
        board.rotateRight();
        board.tick();
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `...........
             .....I.....
             .....I.....
             ...OOIOO...
             ...OOIOO...
             ...OO.OO...
             ...OO.OO...`
        );
    });

    it("cannot rotate because next to right wall", () => {
        moveToSide(board, false);
        board.rotateRight();
        board.moveRight();
        board.tick();
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `...........
             ..........I
             ..........I
             ...OO.OO..I
             ...OO.OO..I
             ...OO.OO...
             ...OO.OO...`
        );
    });

    it("cannot rotate because next to left wall", () => {
        moveToSide(board, true);
        board.rotateRight();
        board.moveLeft();
        board.moveLeft();
        board.tick();
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `...........
             I..........
             I..........
             I..OO.OO...
             I..OO.OO...
             ...OO.OO...
             ...OO.OO...`
        );
    });
});

describe("Wallkick", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(Tetromino.I_SHAPE);
        board.rotateRight();
    });

    it("wallkick when next to left wall", () => {
        moveToSide(board, true);
        board.moveRight();
        board.rotateRight();
        expect(board.toString()).to.equalShape(
            `..........
             ..........
             IIII......
             ..........
             ..........
             ..........`
        );
    });
}); 