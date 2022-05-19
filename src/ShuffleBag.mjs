import { Tetromino } from "./Tetromino.mjs";

export class ShuffleBag {
    bag;
    currentPosition = -1;
    currentShape;

    constructor() {
        this.bag = [];
        this.bag.push(Tetromino.I_SHAPE);
        this.bag.push(Tetromino.J_SHAPE);
        this.bag.push(Tetromino.L_SHAPE);
        this.bag.push(Tetromino.O_SHAPE);
        this.bag.push(Tetromino.S_SHAPE);
        this.bag.push(Tetromino.T_SHAPE);
        this.bag.push(Tetromino.Z_SHAPE);
    }

    getNext() {
        if (this.currentPosition < 1) {
            this.currentPosition = 6;
            this.currentShape = this.bag[0];
            return this.currentShape;
        }

        var pos = Math.floor(Math.random() * this.currentPosition);
        this.currentShape = this.bag[pos];
        this.bag[pos] = this.bag[this.currentPosition];
        this.bag[this.currentPosition] = this.currentShape;
        this.currentPosition--;
        return this.currentShape;
    }

    getLength() {
        return this.bag.length;
    }
}