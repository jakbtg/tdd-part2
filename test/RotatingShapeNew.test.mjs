import { expect } from "chai";
import { RotatingShapeNew } from "../src/RotatingShapeNew.mjs";

describe("Rotating shape", () => {
    const shape = new RotatingShapeNew([
        `.T.
         TTT
         ...`,
        `.T.
         .TT
         .T.`,
        `...
         TTT
         .T.`,
        `.T.
         TT.
         .T.`]);

    it("initial orientation", () => {
        expect(shape.toString()).to.equalShape(
            `.T.
             TTT
             ...`
        );
    });
});