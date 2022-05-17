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

  nonEmptyBlocks() {
    const points = [];
    for (let row = this.shapeRow; row < this.shapeRow + this.movShape.height(); row++) {
      for (let col = this.shapeCol; col < this.shapeCol + this.movShape.width(); col++) {
        const block = this.blockAt(row, col);
        if (block !== EMPTY) {
          points.push(new Point(row, col));
        }
      }
    }
    return points;
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

  moveDown() {
    return new MovableShape(this.movShape, this.shapeRow + 1, this.shapeCol);
  }

  moveLeft() {
    return new MovableShape(this.movShape, this.shapeRow, this.shapeCol - 1);
  }

  moveRight() {
    return new MovableShape(this.movShape, this.shapeRow, this.shapeCol + 1);
  }

  rotateRight() {
    return new MovableShape(this.movShape.rotateRight(), this.shapeRow, this.shapeCol);
  }

  rotateLeft() {
    return new MovableShape(this.movShape.rotateLeft(), this.shapeRow, this.shapeCol);
  }
}

export class Board {
  boardWidth;
  boardHeight;
  stationary;
  fallingShape;

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

  hasFalling() {
    return this.fallingShape != null;
  }

  drop(shape) {
    if (this.hasFalling()) {
      throw "already falling";
    }
    this.startFall(shape);
  }

  startFall(shape) {
    this.fallingShape = new MovableShape(shape, 0, Math.floor((this.boardWidth - shape.width()) / 2));
  }

  tick() {
    this.moveDown();
  }

  moveDown() {
    if (!this.hasFalling()) {
      return;
    }
    const test = this.fallingShape.moveDown();
    if (this.fallingHitsBoardLimits(test) || this.fallingHitsStationary(test)) {
      this.stopFalling();
    } else {
      this.fallingShape = test;
    }
  }

  moveLeft() {
    const test = this.fallingShape.moveLeft();
    if (!this.fallingHitsBoardLimits(test) && !this.fallingHitsStationary(test)) {
      this.fallingShape = test;
    }
  }

  moveRight() {
    const test = this.fallingShape.moveRight();
    if (!this.fallingHitsBoardLimits(test) && !this.fallingHitsStationary(test)) {
      this.fallingShape = test;
    }
  }

  fallingHitsStationary(shape) {
    for (const point of shape.nonEmptyBlocks()) {
      if (this.stationary[point.row][point.col] != EMPTY) {
        return true;
      }
    }
    return false;
  }

  fallingHitsBoardLimits(shape) {
    for (const point of shape.nonEmptyBlocks()) {
      if (point.row >= this.boardHeight || point.col >= this.boardWidth || point.col < 0) {
        return true;
      }
    }
    return false;
  }

  stopFalling() {
    for (let row = 0; row < this.height(); row++) {
      for (let col = 0; col < this.width(); col++) {
        this.stationary[row][col] = this.blockAt(row, col);
      }
    }
    this.fallingShape = null;
  }

  rotateRight() {
    // const test = this.fallingShape.movShape.rotateRight();
    // if (!this.fallingHitsBoardLimits(test) && !this.fallingHitsStationary(test)) {
    //   this.fallingShape = new MovableShape(test, this.fallingShape.shapeRow, this.fallingShape.shapeCol);
    // }
    this.fallingShape = this.fallingShape.rotateRight();
  }

  rotateLeft() {
    this.fallingShape = this.fallingShape.rotateLeft();
  }
}