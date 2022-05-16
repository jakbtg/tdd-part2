const EMPTY = ".";

export class Board {
  width;
  height;
  stationary;
  fallingBlock;
  fallingBlockRow;
  fallingBlockColumn;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.stationary = this.emptyBoard(width, height);
  }

  emptyBoard(width, height) {
    var board = Array(width).fill(null).map(() => Array(height).fill(EMPTY));
    return board;
  }

  toString() {
    var s = "";
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        s += this.getColorAt(i, j);
      }
      s += "\n";
    }
    return s;
  }

  getColorAt(row, col) {
    var cell = this.fallingCellAt(row, col);
    if (cell != EMPTY) {
      return cell;
    }
    return this.stationary[row][col];
  }

  fallingCellAt(row, col) {
    if (!this.hasFalling()) {
      return EMPTY;
    }
    if (row == this.fallingBlockRow && col == this.fallingBlockColumn) {
      //return this.fallingBlock.blockAt(row - this.fallingBlockRow, col - this.fallingBlockColumn);
      return this.fallingBlock.blockAt(0, 0);
    } else {
      return EMPTY;
    }
  }

  hasFalling() {
    return this.fallingBlock != null;
  }

  drop(block) {
    if (this.hasFalling()) {
      throw "already falling";
    }
    this.startFall(block);
  }

  tick() {
    if (this.fallingHitsFloor() || this.fallingHitsStationary()) {
      this.stopFalling();
    } else {
      this.fallOneRow();
    }
  }

  startFall(block) {
    this.fallingBlock = block;
    this.fallingBlockRow = 0;
    this.fallingBlockColumn = 1;
  }

  fallOneRow() {
    this.fallingBlockRow++;
  }

  fallingHitsStationary() {
    return this.stationary[this.fallingBlockRow + 1][this.fallingBlockColumn] != EMPTY;
  }

  fallingHitsFloor() {
    return this.fallingBlockRow == this.height - 1;
  }

  stopFalling() {
    this.stationary[this.fallingBlockRow][this.fallingBlockColumn] = this.fallingBlock.blockAt(0,0);
    this.fallingBlock = null;
  }
}