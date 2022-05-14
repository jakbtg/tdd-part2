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
    var board = Array(width).fill(null).map(() => Array(height).fill("."));
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

  getColorAt(i, j) {
    if (this.hasFallingAt(i, j)) {
      return this.fallingBlock.getColor();
    } else {
      return this.stationary[i][j];
    }
  }

  hasFallingAt(x, y) {
    return this.hasFalling() && x == this.fallingBlockRow && y == this.fallingBlockColumn;
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
    return this.stationary[this.fallingBlockRow + 1][this.fallingBlockColumn] != ".";
  }

  fallingHitsFloor() {
    return this.fallingBlockRow == this.height - 1;
  }

  stopFalling() {
    this.stationary[this.fallingBlockRow][this.fallingBlockColumn] = this.fallingBlock.getColor();
    this.fallingBlock = null;
  }
}