import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {
    static T_SHAPE = new RotatingShape(
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
    static L_SHAPE = new RotatingShape(
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
    static J_SHAPE = new RotatingShape(
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
    static I_SHAPE = new RotatingShape(
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
    static S_SHAPE = new RotatingShape(
        ["" +
        "....\n" +
        ".SS.\n" +
        "SS..\n",
        "" +
        "S...\n" +
        "SS..\n" +
        ".S..\n"], 0);
    static Z_SHAPE = new RotatingShape(
        ["" +
        "....\n" +
        "ZZ..\n" +
        ".ZZ.\n",
        "" +
        "..Z.\n" +
        ".ZZ.\n" +
        ".Z..\n"], 0);
    static O_SHAPE = new RotatingShape(
        ["" +
        ".OO.\n" +
        ".OO.\n"], 0);
}