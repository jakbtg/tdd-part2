import { shapeToString } from "./shape.mjs";

const EMPTY = ".";

export class Board {
  boardWidth;
  boardHeight;
  stationary;
  fallingShape;
  fallingShapeRow;
  fallingShapeColumn;

  constructor(width, height) {
    this.boardWidth = width;
    this.boardHeight = height;
    this.stationary = this.emptyBoard(height, width);
  }

  emptyBoard(height, width) {
    var board = Array(height).fill(null).map(() => Array(width).fill(EMPTY));
    return board;
  }

  width() {
    return this.boardWidth;
  }

  height() {
    return this.boardHeight;
  }

  toString() {
    return shapeToString(this);
  }

  blockAt(row, col) {
    if (this.hasFalling() &&
      row >= this.fallingShapeRow &&
      row < this.fallingShapeRow + this.fallingShape.height() &&
      col >= this.fallingShapeColumn &&
      col < this.fallingShapeColumn + this.fallingShape.width()) {
      return this.fallingShape.blockAt(row - this.fallingShapeRow, col - this.fallingShapeColumn);
    } else {
      return this.stationary[row][col];
    }
  }

  hasFalling() {
    return this.fallingShape != null;
  }

  drop(shape) {
    if (this.hasFalling()) {
      throw "already falling";
    }
    this.startFall(shape);
  }

  tick() {
    if (this.fallingHitsFloor() || this.fallingHitsStationary()) {
      this.stopFalling();
    } else {
      this.fallOneRow();
    }
  }

  startFall(shape) {
    this.fallingShape = shape;
    this.fallingShapeRow = 0;
    this.fallingShapeColumn = Math.floor((this.boardWidth - shape.width()) / 2);
  }

  fallOneRow() {
    this.fallingShapeRow++;
  }

  fallingHitsStationary() {
    return this.stationary[this.fallingShapeRow + 1][this.fallingShapeColumn] != EMPTY;
  }

  fallingHitsFloor() {
    return this.fallingShapeRow == this.boardHeight - 1;
  }

  stopFalling() {
    this.stationary[this.fallingShapeRow][this.fallingShapeColumn] = this.fallingShape.blockAt(0, 0);
    this.fallingShape = null;
  }
}