import { RotatingShape } from "./RotatingShape.mjs";
import { Tetromino } from "./Tetromino.mjs";

export class ShuffleBag {
    bag;
    
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
        return new RotatingShape(["."], 0);
    }

    getLength() {
        return this.bag.length;
    }

}