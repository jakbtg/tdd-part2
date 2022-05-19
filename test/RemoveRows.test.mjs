import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { RotatingShape } from "../src/RotatingShape.mjs";

function fallToBottom(board) {
    for (let i = 0; i < 10; i++) {
      board.tick();
    }
}

function moveToSide(board, left) {
    for (let i = 0; i < 10; i++) {
        if (left) {
            board.moveLeft();
        } else {
            board.moveRight();
        }
    }
}

describe("Remove full rows from the board", () => {
    let board = new Board(10, 6);
    let shape = new RotatingShape(['....\n....\nIIII\n....\n....\n'], 0);
    let otherShape = new RotatingShape([`.OO\n.OO\n...\n`], 0);

    it("can remove one full row", () => {
        board.drop(shape);
        moveToSide(board, true);
        fallToBottom(board);
        board.drop(shape);
        moveToSide(board, false);
        fallToBottom(board);
        board.drop(otherShape);
        fallToBottom(board);

        expect(board.toString()).to.equalShape(
            `..........
             ..........
             ..........
             ..........
             ..........
             ....OO....`
        );

    });
});