function getPostLeft(j) {
    return 20+120*j;
}
function getPostTop(i) {
    return 20+120*i;
}
function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}
// 能不能向左移动 可以返回true
function canMoveLeft(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] !== 0) { //筛选出不为零的数据
                if (board[i][j]===board[i][j-1]||board[i][j-1]===0) {
                    return true; //当前前面的数据为0或相同就可以移动
                }
            }
        }
    }
    return false;
}
function canMoveRight(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j]!==0) {
                if (board[i][j]===board[i][j+1]||board[i][j+1]===0) {
                    return true;
                }
            }
        }
    }
    return false;
}
// 判断中间是否有障碍物
function noBlock(row,col1,col2,board) {
    for (var i = col1+1; i <col2 ; i++) {
        if (board[row][i] !==0) {
            return false;
        }
    }
    return true;
}
function noBlockTop(row1,row2,col,board) {
    for (var i = row1+1; i < row2; i++) {
        if (board[row1][col] !==0) {
            return false;
        }
    }
    return true;
}
function canMoveTop(board) {
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] !==0) {
                if (board[i][j] === board[i-1][j]||board[i-1][j]===0) {
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveBottom(board) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] !==0) {
                if (board[i+1][j] === 0 ||board[i+1][j]===board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
function noMove(board) {
    if (canMoveBottom(board)||canMoveLeft(board)||canMoveTop(board)||canMoveRight(board)) {
        return false;
    }
    return true;
}
