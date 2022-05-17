import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

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