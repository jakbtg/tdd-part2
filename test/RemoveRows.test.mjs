import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { RotatingShape } from "../src/RotatingShape.mjs";
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

describe("Remove full rows from the board", () => {
    let board;
    let shape = new RotatingShape(['....\n....\nIIII\n....\n....\n'], 0);
    let otherShape = new RotatingShape([`.OO\n.OO\n...\n`], 0);

    beforeEach(() => {
        board = new Board(10, 6);
        dropTwoShapesAtSides(board, shape);
    });

    it("can remove one row", () => {
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

    it("can remove more rows", () => {
        dropTwoShapesAtSides(board, shape);

        board.drop(otherShape);
        fallToBottom(board);

        expect(board.toString()).to.equalShape(
            `..........
             ..........
             ..........
             ..........
             ..........
             ..........`
        );
    });

    it("does not remove rows with empty values", () => {
        let point = new RotatingShape([`.P.\n`], 0);
        board.drop(point);
        fallToBottom(board);
        dropTwoShapesAtSides(board, shape);
        let corner = new RotatingShape([`.L\nLL\n`], 0);
        board.drop(corner);
        fallToBottom(board);
        dropTwoShapesAtSides(board, shape);

        expect(board.toString()).to.equalShape(
            `..........
             ..........
             ..........
             ..........
             IIII.LIIII
             IIIIP.IIII`
        );
    });
});