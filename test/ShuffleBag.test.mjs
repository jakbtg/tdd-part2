import { expect } from "chai";
import { ShuffleBag } from '../src/ShuffleBag.mjs';
import { RotatingShape } from '../src/RotatingShape.mjs';
import { Tetromino } from '../src/Tetromino.mjs';

function generateAllTetrominoes() {
    let tetrominoes = [];
    tetrominoes.push(Tetromino.I_SHAPE);
    tetrominoes.push(Tetromino.J_SHAPE);
    tetrominoes.push(Tetromino.L_SHAPE);
    tetrominoes.push(Tetromino.O_SHAPE);
    tetrominoes.push(Tetromino.S_SHAPE);
    tetrominoes.push(Tetromino.T_SHAPE);
    tetrominoes.push(Tetromino.Z_SHAPE);
    return tetrominoes;
}

describe("Shuffle bag", () => {
    let bag;
    let tetrominoes = [];
    beforeEach(() => {
        bag = new ShuffleBag();
        tetrominoes = generateAllTetrominoes();
    });

    it("Calling getNext() returns a RotatingShape", () => {
        expect(bag.getNext()).to.be.an.instanceof(RotatingShape);
    });

    it("Expected to be 7 shapes inside the bag", () => {
        let shapes = [];
        for (let i = 0; i < bag.getLength(); i++) {
            shapes.push(bag.getNext());
        }
        expect(shapes.length).to.equal(7);
    });

    it("Calling getNext() seven times returns all the different shapes", () => {
        let shapes = [];
        for (let i = 0; i < 7; i++) {
            shapes.push(bag.getNext());
        }
        let differentShapes = 0;
        for (let i = 0; i < shapes.length; i++) {
            for (let j = 0; j < tetrominoes.length; j++) {
                if (shapes[i] == tetrominoes[j]) {
                    differentShapes++;
                }
            }
        }
        expect(differentShapes).to.equal(7);
    });
});