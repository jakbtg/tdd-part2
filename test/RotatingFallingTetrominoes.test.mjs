import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { RotatingShape } from "../src/RotatingShape.mjs";

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
    let shape = new RotatingShape([
        `.T.\nTTT\n...\n`,
        `.T.\n.TT\n.T.\n`,
        `...\nTTT\n.T.\n`,
        `.T.\nTT.\n.T.\n`], 0);
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(shape);
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
    let otherShape = new RotatingShape([`.OO\n.OO\n...\n`], 0);
    let shape = new RotatingShape(
        ['....\n....\nIIII\n....\n....\n',
         '..I.\n..I.\n..I.\n..I.\n....\n'], 0);
    beforeEach(() => {
        board = new Board(11, 7);
        board.drop(otherShape);
        board.moveLeft();
        board.moveLeft();
        fallToBottom(board);
        board.drop(otherShape);
        board.moveLeft();
        board.moveLeft();
        fallToBottom(board);
        board.drop(otherShape);
        board.moveRight();
        fallToBottom(board);
        board.drop(otherShape);
        board.moveRight();
        fallToBottom(board);

        board.drop(shape);
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
    let shape = new RotatingShape(
        ['....\n....\nIIII\n....\n....\n',
         '..I.\n..I.\n..I.\n..I.\n....\n'], 0);

    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(shape);
        board.rotateRight();
    });

    it("one step when next to left wall", () => {
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

    it("one step when next to right wall", () => {
        moveToSide(board, false);
        board.rotateLeft();
        expect(board.toString()).to.equalShape(
            `..........
             ..........
             ......IIII
             ..........
             ..........
             ..........`
        );
    });

    it("two steps when next to left wall", () => {
        moveToSide(board, true);
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