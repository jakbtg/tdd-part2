import { shapeToString } from "./shape.mjs";

export class RotatingShapeNew {
    orientations = [];
    currentOrientation;

    constructor(orientations) {
        this.orientations = orientations;
        this.currentOrientation = 0;

    }


}