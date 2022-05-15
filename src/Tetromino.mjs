import { RotatingShape } from "../src/RotatingShape.mjs";

export class Tetromino {
    static T_SHAPE = new Tetromino(`.T.\nTTT\n...\n`);
    shape;

    constructor(shape) {
        this.shape = new RotatingShape(shape);
        Object.freeze(this);
    }

    toString() {
        return this.shape.toString();
    }

    rotateRight() {
        return new Tetromino(this.shape.rotateRight().toString());
    }

    rotateLeft() {
        return new Tetromino(this.shape.rotateLeft().toString());
    }
}