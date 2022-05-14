export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    var s = "";
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        s += ".";
      }
      s += "\n";
    }
    return s;
  }
}
