export class RotatingShape {
    blocks;

    constructor(shape) {
        var rows = (shape.replaceAll(" ", "").trim() + "\n").trim().split("\n");
        this.blocks = [];
        for (let i = 0; i < rows.length; i++) {
            this.blocks[i] = rows[i];
        }
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

    rotateRight() {
        var rotatedBlocks = [];
        for (let i = 0; i < this.blocks[0].length; i++) {
            rotatedBlocks[i] = "";
            for (let j = this.blocks.length - 1; j >= 0; j--) {
                rotatedBlocks[i] += this.blocks[j][i];
            }
        }
        return new RotatingShape(rotatedBlocks.join("\n"));
    }

    rotateLeft() {
        return this.rotateRight().rotateRight().rotateRight();
    }
}