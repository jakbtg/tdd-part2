import { expect } from "chai";
import { ShuffleBag } from '../src/ShuffleBag.mjs';
import { RotatingShape } from '../src/RotatingShape.mjs';

describe("Shuffle bag", () => {
    let bag;
    beforeEach(() => {
        bag = new ShuffleBag();
    });

    it("Calling getNext() returns a RotatingShape", () => {
        expect(bag.getNext()).to.be.an.instanceof(RotatingShape);
    });

    it("Expected to be 7 different shapes inside the bag", () => {
        let shapes = [];
        for (let i = 0; i < bag.getLength(); i++) {
            shapes.push(bag.getNext());
        }
        expect(shapes).to.have.lengthOf(7);
    });
});