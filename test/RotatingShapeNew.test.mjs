import { expect } from "chai";
import { RotatingShapeNew } from "../src/RotatingShapeNew.mjs";

describe("Rotating shape NEW", () => {
    const shape = new RotatingShapeNew([
        `.T.\nTTT\n...\n`,
        `.T.\n.TT\n.T.\n`,
        `...\nTTT\n.T.\n`,
        `.T.\nTT.\n.T.\n`]);

    it("initial orientation", () => {
        expect(shape.toString()).to.equalShape(
            `.T.
             TTT
             ...`
        );
    });
});