export class Tetromino {
    static T_SHAPE = new Tetromino(`.T.\nTTT\n...\n`);
    shape;

    constructor(shape) {
        this.shape = shape;
        Object.freeze(this);
    }

    toString() {
        var s = "";
        s += this.shape;
        return s;
    }
}