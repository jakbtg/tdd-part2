import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { RotatingShape } from "../src/RotatingShape.mjs";
import { ScoringSystem } from "../src/ScoringSystem.mjs";
import { fallToBottom } from "./UtilityFunctions.mjs";
import { moveToSide } from "./UtilityFunctions.mjs";

function dropTwoShapesAtSides(board, shape) {
    board.drop(shape);
    moveToSide(board, true);
    fallToBottom(board);
    board.drop(shape);
    moveToSide(board, false);
    fallToBottom(board);
}

describe("Scoring system", () => {
    let board;
    let shape = new RotatingShape(['IIII\nIIII\nIIII\nIIII\n'], 0);
    let one = new RotatingShape([`OO\n`], 0);
    let two = new RotatingShape([`OO\nOO\n`], 0);
    let three = new RotatingShape([`OO\nOO\nOO\n`], 0);
    let four = new RotatingShape([`OO\nOO\nOO\nOO\n`], 0);

    beforeEach(() => {
        board = new Board(10, 6);
        dropTwoShapesAtSides(board, shape);
    });

    it("points for one row removed", () => {
        board.drop(one);
        fallToBottom(board);
        expect(board.getScore()).to.equal(40);
    });

    it("points for two rows removed", () => {
        board.drop(two);
        fallToBottom(board);
        expect(board.getScore()).to.equal(100);
    });

    it("points for three rows removed", () => {
        board.drop(three);
        fallToBottom(board);
        expect(board.getScore()).to.equal(300);
    });
});