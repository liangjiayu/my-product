// JavaScript Document

//按需写入所需的函数名
$(function () {
    checkBrowser();

    // 阻止默认行为写法，Chrome56以上版本
    // document.addEventListener('touchmove', func, isPassive() ? {
    //         capture: false,
    //         passive: false
    //     } : false);
})

// 判断浏览器
var checkBrowser = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    var msie9 = /msie 9\.0/i.test(userAgent);
    var msie8 = /msie 8\.0/i.test(userAgent);
    var msie7 = /msie 7\.0/i.test(userAgent);
    var msie6 = /msie 6\.0/i.test(userAgent);
    var checkHtml = '';

    // if (msie9 || msie8 || msie7 || msie6) {
    //     $('body').append(checkHtml);
    // };

    if (msie8) {
        checkHtml = '<div class="checkBrowser"><span>您现在使用的是IE8内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>';
        $('body').append(checkHtml);
    } else if (msie7) {
        checkHtml = '<div class="checkBrowser"><span>您现在使用的是IE7内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>';
        $('body').append(checkHtml);
    } else if (msie6) {
        checkHtml = '<div class="checkBrowser"><span>您现在使用的是IE6内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>';
        $('body').append(checkHtml);
    }

    checkBrowser.close = function () {
        $('.checkBrowser').remove();
    }
}

// 判断是否移动设备
var isMobile = function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
}

function func(e) {
    e.preventDefault();
}

$(function () {

    // 移动导航
    var mobileScroll;
    $('#J_mo-btn').on('click', function () {
        $(this).addClass('active');
        document.addEventListener('touchmove', func, isPassive() ? {
            capture: false,
            passive: false
        } : false);
        mobileScroll = new IScroll('#J_iphoneNav', {
            click: false,
            tap: true,
            preventDefault: false,
            scrollY: true
        });
        $('.mo-iphone-mark').show();
        $('#J_iphoneNav').addClass('active');
    })

    // 关闭导航
    $('.mo-iphone-mark').on('click', function () {
        $('#J_mo-btn').removeClass('active');
        document.removeEventListener('touchmove', func, isPassive() ? {
            capture: false,
            passive: false
        } : false);
        $('#J_iphoneNav').removeClass('active');
        mobileScroll.destroy();
        $('.mo-iphone-mark').hide();
    });

    // 更新导航
    $('#J_iphoneNav').find('i').on('click', function () {
        var li = $(this).parents('.li');
        if (!li.find('.two-list').length) {
            return false;
        }
        li.find('.two-list').stop(true, true).slideToggle(function () {
            mobileScroll.refresh();
        })
    })

})