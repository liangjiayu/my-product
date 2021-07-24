
var board = []; // 存放数据
var score = 0;
$(function () {
    newgame();
});
function newgame() {
    init();
    getOneNum();
}
//2048的数据 初始化
function init() {
    board = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    score = 0;
    updataView();
}
// 把数据库显示出来
function updataView() {
    $('.grid-num').remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $('.container').append('<div class="grid-num" id="grid-num-'+i+'-'+j+'">');
            // 每一个小板
            var cell = $('#grid-num-'+i+'-'+j);
            // 读出数据
            var num = board[i][j];
            if (num === 0) {
                cell.css({
                    'width':0,
                    'height':0,
                    'left':getPostLeft(j),
                    'top':getPostTop(i)
                });
            } else {
                cell.css({
                    'width':100,
                    'height':100,
                    'left':getPostLeft(j),
                    'top':getPostTop(i)
                }).text(num);
            }
        }
    }
}
// 对空的位置数据出一个2或者4
function getOneNum() {
    if (nospace(board)) {
        return false; //表示没有位置 退出函数
    }
    // 随机出一个坐标
    var time = 0;
    var rani = parseInt(Math.floor(Math.random()*4));
    var ranj = parseInt(Math.floor(Math.random()*4));
    //下面是对随机出来的坐标进行判断 对应的数据是否为空
    while (time<50) {
        if (board[rani][ranj] === 0) {
            break;
        }
        rani = parseInt(Math.floor(Math.random()*4));
        ranj = parseInt(Math.floor(Math.random()*4));
        time++;
    }
    if (time === 50) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (board[i][j]===0) {
                    rani = i;
                    ranj = j;
                }
            }
        }
    }
    var num = Math.random() < 0.5 ? 2 : 4;
    board[rani][ranj] = num;
    showNumberAnimation(rani,ranj,num);
    return true;
}
function isgameover(board) {
    if (noMove(board)&&nospace(board)) {
        alert("游戏结束");
    }
}
$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37:
            moveLeft();
            getOneNum();
            isgameover(board);
            break;
        case 38:
            moveTop();
            getOneNum();
            isgameover(board);
            break;
        case 39:
            moveRight();
            getOneNum();
            isgameover(board);
            break;
        case 40:
            moveBottom();
            getOneNum();
            isgameover(board);
            break;
        default :
            break;
    }
});
function moveLeft() {
    //先判断是否可以移动
    if (!canMoveLeft(board)) {
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j]!==0 ) {
                for (var k = 0; k < j; k++) {
                    if (board[i][k]===0 && noBlock(i,k,j,board)) {
                        showMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    if (board[i][k] === board[i][j] && noBlock(i,k,j,board)) {
                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updataScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updataView,200);
}
function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >=0; j--) {
            if (board[i][j] !==0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k]===0 && noBlock(i,j,k,board)) {
                        showMoveAnimation(i,j,i,k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    if (board[i][k]===board[i][j] && noBlock(i,j,k,board)) {
                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updataScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updataView,200);
}
function moveTop() {
    if (!canMoveTop(board)) {
        return false;
    }
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j]!==0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] === 0 && noBlockTop(i,k,j,board)) {
                        showMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    if (board[k][j] === board[i][j] && noBlockTop(i,k,j,board)) {
                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updataScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updataView,200);
}
function moveBottom() {
    if (!canMoveBottom(board)) {
        return false;
    }
    for (var i = 2; i >=0; i--) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j]!==0) {
                for (var k = 3; k > i; k--) {
                    if (board[k][j] === 0 && noBlockTop(i,k,j,board)) {
                        showMoveAnimation(i,j,k,j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    if (board[k][j] === board[i][j] && noBlockTop(i,k,j,board)) {
                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updataScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout(updataView,200);
}
