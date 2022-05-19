import { shapeToString } from "./shape.mjs";

class CurrentShape {
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
}

export class RotatingShapeNew {
    orientations = [];
    currentOrientation;
    currentShape;

    constructor(orientations, currentOrientation) {
        this.orientations = orientations;
        this.currentOrientation = currentOrientation;
        this.currentShape = new CurrentShape(this.orientations[this.currentOrientation]);
        Object.freeze(this);
    }

    toString() {
        console.log(this.currentShape.toString());
        return this.currentShape.toString();
    }

    height() {
        return this.currentShape.height();
    }

    width() {
        return this.currentShape.width();
    }

    blockAt(row, col) {
        return this.currentShape.blockAt(row, col);
    }

    rotateRight() {
        return new RotatingShapeNew(this.orientations, (this.currentOrientation + 1) % this.orientations.length);
    }

    rotateLeft() {
        return new RotatingShapeNew(this.orientations, (this.currentOrientation + this.orientations.length - 1) % this.orientations.length);
    }
}