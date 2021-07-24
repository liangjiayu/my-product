function showNumberAnimation(i,j,num) {
    $('#grid-num-'+i+'-'+j).css({
        'width':"100",
        'height':"100",
        'top':getPostTop(i),
        'left':getPostLeft(j)
    }).text(num);
}
function showMoveAnimation(i,j,i_1,k) {
    $('#grid-num-'+i+'-'+j).animate({
        top : getPostTop(i_1),
        left :getPostLeft(k)
    },200);
}
function updataScore(score) {
    $('#score').text(score);
}
