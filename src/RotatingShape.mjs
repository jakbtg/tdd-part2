export class RotatingShape {
    blocks;

    constructor(shape) {
        var rows = (shape.replaceAll(" ", "").trim() + "\n").trim().split("\n");
        this.blocks = [];
        for (let i = 0; i < rows.length; i++) {
            this.blocks[i] = rows[i];
        }
        console.log(this.blocks);
        Object.freeze(this);
    }

    toString() {
        var s = "";
        for (let row = 0; row < this.blocks.length; row++) {
            for (let col = 0; col < this.blocks[row].length; col++) {
                s += this.blocks[row][col];
            }
            s += "\n";
        }
        return s;
    }
}