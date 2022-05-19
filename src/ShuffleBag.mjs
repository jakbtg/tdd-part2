import { RotatingShape } from "./RotatingShape.mjs";

export class ShuffleBag {
    bag;
    
    constructor() {
        this.bag = [];
    }

    getNext() {
        return new RotatingShape(["."], 0);
    }

}