export class Board {
  width;
  height;
  fallingBlock;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    var s = "";
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (this.hasFallingAt(i, j)) {
          s += this.fallingBlock.getColor();
        } else {
          s += ".";
        }
      }
      s += "\n";
    }
    return s;
  }

  hasFallingAt(x, y) {
    return this.hasFallingBlock() && x == 0 && y == 1;
  }

  hasFallingBlock() {
    return this.fallingBlock != null;
  }

  drop(block) {
    this.fallingBlock = block;
  }
}
