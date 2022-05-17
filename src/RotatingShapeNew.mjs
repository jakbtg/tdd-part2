import { shapeToString } from "./shape.mjs";

export class RotatingShapeNew {
    orientations = [];
    currentOrientation;

    constructor(orientations) {
        for (let i = 0; i < orientations.length; i++) {
            var rows = (orientations[i].replaceAll(" ", "").trim() + "\n").trim().split("\n");
            var shape = [];
            for (let j = 0; j < rows.length; j++) {
                shape[j] = rows[j];
            }
            this.orientations[i] = shape;
        }
        this.currentOrientation = 0;
    }

    toString() {
        return shapeToString(this);
    }

    height() {
        return this.orientations[0].length;
    }

    width() {
        return this.orientations[0][0].length;
    }

    blockAt(row, col) {
        return this.orientations[this.currentOrientation][row][col];
    }
}