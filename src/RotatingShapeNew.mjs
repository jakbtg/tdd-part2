import { shapeToString } from "./shape.mjs";

export class RotatingShapeNew {
    orientations = [];
    currentOrientation;

    constructor(orientations, currentOrientation) {
        // for (let i = 0; i < orientations.length; i++) {
        //     var rows = (orientations[i].replaceAll(" ", "").trim() + "\n").trim().split("\n");
        //     var shape = [];
        //     for (let j = 0; j < rows.length; j++) {
        //         shape[j] = rows[j];
        //     }
        //     this.orientations[i] = shape;
        // }
        this.orientations = orientations;
        this.currentOrientation = currentOrientation;
        // console.log(this.orientations.length);
    }

    toString() {
        return this.orientations[this.currentOrientation];
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

    rotateRight() {
        // this.currentOrientation = (this.currentOrientation + 1) % this.orientations.length;
        // console.log(this.currentOrientation);
        return new RotatingShapeNew(this.orientations, (this.currentOrientation + 1) % this.orientations.length);
    }

    rotateLeft() {
        // console.log(this.currentOrientation);
        // this.currentOrientation = (this.currentOrientation + this.orientations.length - 1) % this.orientations.length;
        // console.log(this.currentOrientation);
        return new RotatingShapeNew(this.orientations, (this.currentOrientation + this.orientations.length - 1) % this.orientations.length);
    }
}