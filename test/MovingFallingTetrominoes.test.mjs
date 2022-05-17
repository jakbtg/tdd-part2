import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

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
});


