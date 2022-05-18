import { expect } from "chai";
import { RotatingShapeNew } from "../src/RotatingShapeNew.mjs";

describe("Rotating shape NEW", () => {
    let shape;
    beforeEach(() => {
        shape = new RotatingShapeNew([
            `.T.\nTTT\n...\n`,
            `.T.\n.TT\n.T.\n`,
            `...\nTTT\n.T.\n`,
            `.T.\nTT.\n.T.\n`], 0);
    });


    it("initial orientation", () => {
        expect(shape.toString()).to.equalShape(
            `.T.
             TTT
             ...`
        );
    });

    it("can be rotated right/clockwise", () => {
        // shape.rotateRight();
        expect(shape.rotateRight().toString()).to.equalShape(
            `.T.
             .TT
             .T.`
        );
    });

    it("can be rotated left/counterclockwise", () => {
        // shape.rotateLeft();
        expect(shape.rotateLeft().toString()).to.equalShape(
            `.T.
             TT.
             .T.`
        );
    });

    it("can loop around right/clockwise", () => {
        shape.rotateRight();
        shape.rotateRight();
        shape.rotateRight();
        shape.rotateRight();
        expect(shape.toString()).to.equalShape(
            `.T.
             TTT
             ...`
        );
    });
});