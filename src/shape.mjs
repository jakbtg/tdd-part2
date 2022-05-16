export function shapeToString(shape) {
    var s = "";
    for (let i = 0; i < shape.height(); i++) {
        for (let j = 0; j < shape.width(); j++) {
        s += shape.blockAt(i, j);
        }
        s += "\n";
    }
    return s;
}