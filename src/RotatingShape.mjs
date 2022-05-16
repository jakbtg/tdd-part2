import { shapeToString } from "./shape.mjs";

export class RotatingShape {
    shape;

    constructor(shape) {
        var rows = (shape.replaceAll(" ", "").trim() + "\n").trim().split("\n");
        this.shape = [];
        for (let i = 0; i < rows.length; i++) {
            this.shape[i] = rows[i];
        }
        Object.freeze(this);
    }

    width() {
        return this.shape[0].length;
    }

    height() {
        return this.shape.length;
    }

    toString() {
        return shapeToString(this);
    }

    blockAt(row, col) {
        return this.shape[row][col];
    }

    rotateRight() {
        var rotated = [];
        for (let i = 0; i < this.shape[0].length; i++) {
            rotated[i] = "";
            for (let j = this.shape.length - 1; j >= 0; j--) {
                rotated[i] += this.shape[j][i];
            }
        }
        return new RotatingShape(rotated.join("\n"));
    }

    rotateLeft() {
        return this.rotateRight().rotateRight().rotateRight();
    }
}