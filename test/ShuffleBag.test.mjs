import { expect } from "chai";
import { ShuffleBag } from '../src/ShuffleBag.mjs';
import { RotatingShape } from '../src/RotatingShape.mjs';

describe("Shuffle bag", () => {
    let bag;
    beforeEach(() => {
        bag = new ShuffleBag();
    });

    it("Calling getNext() returns a random shape", () => {
        expect(bag.getNext()).to.be.an.instanceof(RotatingShape);
    });
});