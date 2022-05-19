import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { RotatingShape } from "../src/RotatingShape.mjs";
import { moveToSide } from "./UtilityFunctions.mjs";
import { fallToBottom } from "./UtilityFunctions.mjs";
import { moveToBottom } from "./UtilityFunctions.mjs";

describe("Moving falling tetrominoes", () => {
    let board;
    let shape = new RotatingShape([`.T.\nTTT\n...\n`], 0);
    beforeEach(() => {
        board = new Board(10, 6);
        board.drop(shape);
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
        moveToBottom(board);
        expect(board.toString()).to.equalShape(
            `..........
             ..........
             ..........
             ..........
             ....T.....
             ...TTT....`
        );
    });

    it("it cannot be moved left through other blocks", () => {
        moveToSide(board, true);
        fallToBottom(board);
        board.drop(shape);
        moveToSide(board, true);
        fallToBottom(board);
        board.drop(shape);
        board.moveDown();
        moveToSide(board, true);
        expect(board.toString()).to.equalShape(
            `..........
             ...T......
             .TTTT.....
             TTT.......
             .T........
             TTT.......`
        );
    });

    it("it cannot be moved right through other blocks", () => {
        moveToSide(board, false);
        fallToBottom(board);
        board.drop(shape);
        moveToSide(board, false);
        fallToBottom(board);
        board.drop(shape);
        board.moveDown();
        moveToSide(board, false);
        expect(board.toString()).to.equalShape(
            `..........
             ......T...
             .....TTTT.
             .......TTT
             ........T.
             .......TTT`
        );
    });

    it("it cannot be moved down through other blocks (will stop falling)", () => {
        fallToBottom(board);
        board.drop(shape);
        moveToBottom(board);
        expect(board.toString()).to.equalShape(
            `..........
             ..........
             ....T.....
             ...TTT....
             ....T.....
             ...TTT....`
          );
        });
});


