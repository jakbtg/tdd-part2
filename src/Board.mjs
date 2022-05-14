export class Board {
  width;
  height;
  fallingBlock;
  fallingBlockRow = 0;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    var s = "";
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        s += this.hasFallingAt(i, j) ? this.fallingBlock.getColor() : ".";
      }
      s += "\n";
    }
    return s;
  }

  hasFallingAt(x, y) {
    return this.hasFalling() && x == this.fallingBlockRow && y == 1;
  }

  hasFalling() {
    return this.fallingBlock != null;
  }

  drop(block) {
    if (this.hasFalling()) {
      throw "already falling";
    }
    this.fallingBlock = block;
  }

  tick() {
    this.fallingBlockRow++;
  }
}
