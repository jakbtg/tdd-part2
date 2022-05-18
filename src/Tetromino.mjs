import { RotatingShape } from "../src/RotatingShape.mjs";
import { RotatingShapeNew } from "./RotatingShapeNew.mjs";
import { shapeToString } from "./shape.mjs";

export class Tetromino {
    static T_SHAPE = new Tetromino(`.T.\nTTT\n...\n`, 0, 4);
    static I_SHAPE = new Tetromino(`.....\n.....\nIIII.\n.....\n.....\n`, 0, 2);
    static O_SHAPE = new Tetromino(`.OO\n.OO\n...\n`, 0, 1);
    static L_SHAPE = new Tetromino(`...\nLLL\nL..\n`, 0, 4);
    static J_SHAPE = new Tetromino(`...\nJJJ\n..J\n`, 0, 4);
    static S_SHAPE = new Tetromino(`...\n.SS\nSS.\n`, 0, 2);
    static Z_SHAPE = new Tetromino(`...\nZZ.\n.ZZ\n`, 0, 2);

    static T_SHAPE_NEW = new RotatingShapeNew(
        ["" +
        "....\n" +
        "TTT.\n" +
        ".T..\n",
        "" +
        ".T..\n" +
        "TT..\n" +
        ".T..\n",
        "" +
        "....\n" +
        ".T..\n" +
        "TTT.\n",
        "" +
        ".T..\n" +
        ".TT.\n" +
        ".T..\n"], 0);
    static L_SHAPE_NEW = new RotatingShapeNew(
        ["" +
        "....\n" +
        "LLL.\n" +
        "L...\n",
        "" +
        "LL..\n" +
        ".L..\n" +
        ".L..\n",
        "" +
        "....\n" +
        "..L.\n" +
        "LLL.\n",
        "" +
        ".L..\n" +
        ".L..\n" +
        ".LL.\n"], 0);
    static J_SHAPE_NEW = new RotatingShapeNew(
        ["" +
        "....\n" +
        ".JJJ\n" +
        "...J\n",
        "" +
        ".J..\n" +
        ".J..\n" +
        "JJ..\n",
        "" +
        "....\n" +
        ".J..\n" +
        ".JJJ\n",
        "" +
        ".JJ.\n" +
        ".J..\n" +
        ".J..\n"], 0);
    static I_SHAPE_NEW = new RotatingShapeNew(
        ["" +
        "....\n" +
        "IIII\n" +
        "....\n" +
        "....\n",
        "" +
        "..I.\n" +
        "..I.\n" +
        "..I.\n" +
        "..I.\n"], 0);
    static S_SHAPE_NEW = new RotatingShapeNew(
        ["" +
        "....\n" +
        ".SS.\n" +
        "SS..\n",
        "" +
        "S...\n" +
        "SS..\n" +
        ".S..\n"], 0);
    static Z_SHAPE_NEW = new RotatingShapeNew(
        ["" +
        "....\n" +
        "ZZ..\n" +
        ".ZZ.\n",
        "" +
        "..Z.\n" +
        ".ZZ.\n" +
        ".Z..\n"], 0);
    static O_SHAPE_NEW = new RotatingShapeNew(
        ["" +
        ".OO.\n" +
        ".OO.\n"], 0);

    orientations;
    currentOrientation;

    constructor(shape, currentOrientation, orientations) {
        if (shape === null) {
            this.currentOrientation = (currentOrientation + orientations.length) % orientations.length;
            this.orientations = orientations;
        } else {
            var shape = new RotatingShape(shape);
            this.currentOrientation = currentOrientation;
            this.orientations = [shape, shape.rotateRight(), shape.rotateRight().rotateRight(),
                shape.rotateLeft()].slice(0, orientations);
        }
        Object.freeze(this);
    }

    currentShape() {
        return this.orientations[this.currentOrientation];
    }

    width() {
        return this.currentShape().width();
    }

    height() {
        return this.currentShape().height();
    }

    toString() {
        return shapeToString(this.currentShape());
    }

    blockAt(row, col) {
        return this.currentShape().blockAt(row, col);
    }

    rotateRight() {
        return new Tetromino(null, this.currentOrientation + 1, this.orientations);
    }

    rotateLeft() {
        return new Tetromino(null, this.currentOrientation - 1, this.orientations);
    }
}