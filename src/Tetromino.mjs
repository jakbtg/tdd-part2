import { RotatingShape } from "../src/RotatingShape.mjs";

export class Tetromino {
    static T_SHAPE = new Tetromino(`.T.\nTTT\n...\n`, 0, 4);
    static I_SHAPE = new Tetromino(`.....\n.....\nIIII.\n.....\n.....\n`, 0, 2);
    static O_SHAPE = new Tetromino(`.OO\n.OO\n...\n`, 0, 1);
    static L_SHAPE = new Tetromino(`...\nLLL\nL..\n`, 0, 4);
    static J_SHAPE = new Tetromino(`...\nJJJ\n..J\n`, 0, 4);
    static S_SHAPE = new Tetromino(`...\n.SS\nSS.\n`, 0, 2);
    static Z_SHAPE = new Tetromino(`...\nZZ.\n.ZZ\n`, 0, 2);
    orientations;
    currentOrientation;

    constructor(shape, currentOrientation, orientations) {
        if (shape === null) {
            this.currentOrientation = (currentOrientation + orientations.length) % orientations.length;
            this.orientations = orientations;
        } else {
            var shape = new RotatingShape(shape);
            this.currentOrientation = currentOrientation;
            this.orientations = [shape, shape.rotateRight(), shape.rotateRight().rotateRight(), 
                shape.rotateLeft()].slice(0, orientations);
        }
        Object.freeze(this);
    }

    currentShape() {
        return this.orientations[this.currentOrientation];
    }

    toString() {
        return this.currentShape().toString();
    }

    rotateRight() {
        return new Tetromino(null, this.currentOrientation + 1, this.orientations);
    }

    rotateLeft() {
        return new Tetromino(null, this.currentOrientation - 1, this.orientations);
    }
}