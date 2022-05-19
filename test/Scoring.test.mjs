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
    let shape = new RotatingShape(['....\nIIII\nIIII\n....\n....\n'], 0);
    let one = new RotatingShape([`OO\n`], 0);
    let score = new ScoringSystem();

    beforeEach(() => {
        board = new Board(10, 6);
        dropTwoShapesAtSides(board, shape);
    });

    it("points for one row removed", () => {
        board.drop(one);
        fallToBottom(board);
        expect(board.getScore()).to.equal(40);
    });

});