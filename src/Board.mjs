export class Board {
  width;
  height;
  falling = false;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    var s = "";
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        if (i == 0 && j == 1 && this.falling) {
          s += "X";
        } else {
          s += ".";
        }
      }
      s += "\n";
    }
    return s;
  }

  drop(block) {
    this.falling = true;
  }
}
