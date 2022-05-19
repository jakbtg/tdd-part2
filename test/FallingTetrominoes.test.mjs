
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { RotatingShapeNew } from "../src/RotatingShapeNew.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling tetrominoes", () => {
  let board;
  let shape = new RotatingShapeNew([`.T.\nTTT\n...\n`], 0);
  beforeEach(() => {
    board = new Board(10, 6);
    board.drop(shape);
  });

  it("start from the top middle", () => {
    expect(board.toString()).to.equalShape(
      `....T.....
       ...TTT....
       ..........
       ..........
       ..........
       ..........`
    );
  });

  it("stop when they hit the bottom", () => {
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
  });

  it("stop when they land on another block", () => {
    fallToBottom(board);
    board.drop(shape);
    fallToBottom(board);

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

