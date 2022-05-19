export function moveToSide(board, left) {
    for (let i = 0; i < 10; i++) {
        if (left) {
            board.moveLeft();
        } else {
            board.moveRight();
        }
    }
}

export function fallToBottom(board) {
    for (let i = 0; i < 10; i++) {
        board.tick();
    }
}

export function moveToBottom(board) {
    for (let i = 0; i < 10; i++) {
        board.moveDown();
    }
}