import { RotatingShapeNew } from "./RotatingShapeNew.mjs";

export class TetrominoesRotationSystem {
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
}