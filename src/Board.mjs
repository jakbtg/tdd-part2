import { shapeToString } from "./shape.mjs";

const EMPTY = ".";

class Point {
  row;
  col;

  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}


class MovableShape {
  movShape;
  shapeRow;
  shapeCol;

  constructor(shape, row, col) {
    this.movShape = shape;
    this.shapeRow = row;
    this.shapeCol = col;
  }

  moveDown() {
    return new MovableShape(this.movShape, this.shapeRow + 1, this.shapeCol);
  }

  width() {
    return this.movShape.width();
  }

  height() {
    return this.movShape.height();
  }

  blockAt(row, col) {
    if (
      row >= this.shapeRow &&
      row < this.shapeRow + this.movShape.height() &&
      col >= this.shapeCol &&
      col < this.shapeCol + this.movShape.width()
    ) {
      return this.movShape.blockAt(row - this.shapeRow, col - this.shapeCol);
    } else {
      return EMPTY;
    }
  }
}

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
    if (this.hasFalling()) {
      var cell = this.fallingShape.blockAt(row, col);
      if (cell != EMPTY) {
        return cell;
      }
    }
    return this.stationary[row][col];
  }

  cellAt(row, col) {
    if (row >= this.fallingShapeRow &&
      row < this.fallingShapeRow + this.fallingShape.height() &&
      col >= this.fallingShapeColumn &&
      col < this.fallingShapeColumn + this.fallingShape.width()) {
      return this.fallingShape.blockAt(row - this.fallingShapeRow, col - this.fallingShapeColumn);
    } else {
      return EMPTY;
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
    if (!this.hasFalling()) {
      return;
    }
    if (this.fallingHitsFloor() || this.fallingHitsStationary()) {
      this.stopFalling();
    } else {
      this.fallingShape = this.fallingShape.moveDown();
      this.fallingShapeRow++;
    }
  }

  startFall(shape) {
    this.fallingShape = new MovableShape(shape, 0, Math.floor((this.boardWidth - shape.width()) / 2));
    this.fallingShapeRow = 0;
    this.fallingShapeColumn = Math.floor((this.boardWidth - shape.width()) / 2);
  }

  fallingHitsStationary() {
    return this.stationary[this.fallingShapeRow + 1][this.fallingShapeColumn] != EMPTY;
  }

  fallingHitsFloor() {
    // return this.fallingShapeRow + this.fallingShape.height() >= this.height();
    return this.fallingShapeRow + 1 >= this.boardHeight;
  }

  stopFalling() {
    for (let row = 0; row < this.height(); row++) {
      for (let col = 0; col < this.width(); col++) {
        this.stationary[row][col] = this.blockAt(row, col);
      }
    }
    this.fallingShape = null;
  }
}