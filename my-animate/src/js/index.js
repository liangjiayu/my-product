$(function () {
    // 初始化 数据
    var arr = [];
    var animBox = $('.anim-box');
    var scrollTop;
    var timer = null;
    var pos = $(window).height() / 2;
    animBox.each(function (i, ele) {
        arr.push($(ele).offset().top);
    })

    // 封装函数
    function addAnim(scrollTop, arr) {
        arr.forEach(function (ele, i) {
            if (scrollTop > ele) {
                animBox.eq(i).addClass('anim');
            }
        })
    }
    // 绑定事件
    $(window).on('scroll', function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            scrollTop = $(this).scrollTop() + pos;
            addAnim(scrollTop, arr);
        }.bind(this), 100);
    })
});