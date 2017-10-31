// 常用swiper 参数

$(function () {
	var mySwiper = new Swiper('.swiper-container', {

		// 一般选择
		initialSlide: 1, //初始化 索引
		direction: 'vertical', //滑动方向
		speed: 1000, //滑动速度
		autoplay: 5000, // 自动播放
		autoplayDisableOnInteraction: false, //触碰后是否自动播放
		autoHeight: true, //容器高度自适应
		grabCursor: true, //鼠标手势
		// 响应式
		breakpoints: {
			//当宽度小于等于320
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			//当宽度小于等于480
			480: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			//当宽度小于等于640
			640: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		},

		// 切换效果
		effect: 'fade',

		// 点击事件
		preventClicks: false, //阻止 链接默认行为

		// 拖拉 弹性
		simulateTouch: false, //禁用鼠标拖拉
		resistanceRatio: 0, //边缘的弹性

		// 分页器
		pagination: '.swiper-pagination',
		paginationClickable: true, //点击
		// 自定义带数字的分页器
		paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},

		// 控制器 
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',

		// 滚动条
		scrollbar: '.swiper-scrollbar', //定义滚动条
		scrollbarHide: false, //是否自动隐藏
		scrollbarDraggable: true, //是否可以拖拉

		// 网格系统
		slidesPerView: 2, //'auto' wrap 显示几个slider
		spaceBetween: 20, //slider的间隙
		slidesPerGroup: 3, //滑动一次的个数
		// 多行布局
		slidesPerColumn: 2, //两行
		slidesPerColumnFill: 'row', //填充的模式

		// 环路
		loop: true,

		// 放大
		zoom: true,

		// 回调函数
		// slide 滑动开始 调用
		onSlideChangeStart: function (swiper) {
			alert(swiper.activeIndex);
		},
		// slide 滑动结束 调用
		onSlideChangeEnd: function (swiper) {
			alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
		},
		// 点击slide 调用
		onTap: function (swiper) {
			alert('你tap了Swiper');
		}
	})
	// *** new swiper后

	// 双向控制
	Swiper1.params.control = Swiper2; //需要在Swiper2初始化后，Swiper1控制Swiper2
	Swiper2.params.control = Swiper1; //需要在Swiper1初始化后，Swiper2控制Swiper1

	// 属性
	mySwiper.activeIndex; //激活滑块的索引
	mySwiper.params.autoplay = 200; //swiper的初始化参数 可以重置参数

	// swiper 方法  runCallbacks 为 false 不触发onSlideChange
	mySwiper.slidePrev(runCallbacks, speed); //上一个
	mySwiper.slideNext(runCallbacks, speed); //下一个
	mySwiper.slideTo(index, speed, runCallbacks) //移动到指定slide
	mySwiper.destroy(true, true); //销毁swiper
	mySwiper.removeSlide(1); //移除第二个slide
	mySwiper.update(); //重新更新swiper数据
})


$(function () {
	var mySwiper = new Swiper('.record-swiper', {
		slidesPerView: 7,
		prevButton: '.record-prev',
		nextButton: '.record-next',
		resistanceRatio: 0,
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			480: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 5,
			}
		},
	});
	$(".record-swiper .swiper-slide").click(function () {
		$(this).find('.data-num').addClass('active').parent('.swiper-slide').siblings().find('.data-num').removeClass('active');
		var index = $(this).index();
		$(".record-tabs .record-show-con").eq(index).show().siblings().hide();
	})
})


$(function () {
	var caseSwiper = new Swiper('#caseSwiper', {
		simulateTouch: false,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		slidesPerView: 4,
		spaceBetween: 15,
		nextButton: '.index-case-next',
		prevButton: '.index-case-prev',
		breakpoints: {
			600: {
				pagination: '#caseSwiper .swiper-pagination',
				slidesPerView: 2
			},
			800: {
				pagination: '#caseSwiper .swiper-pagination',
				slidesPerView: 3
			},
			1200: {
				pagination: '#caseSwiper .swiper-pagination',
				paginationClickable: true
			}
		}
	});
})
var introHeight = $('.mapBox .mapList').height();
var piccountPage = Math.ceil(introHeight / 576);
//console.log(piccountPage);
var nowPage = 1;
var textScroll = {
	move: function (page) {
		var textHeight = $('.mapBox').height();
		var position = -(textHeight * (page - 1));
		$('.mapBox .mapList').stop(true, true).animate({
			'top': position + 'px'
		});
	}
};
$('.prev').click(function (e) {
	e.preventDefault();
	var prevPage = nowPage - 1;
	if (prevPage > 0) {
		textScroll.move(prevPage);
		nowPage--;
	}
});
$('.next').click(function (e) {
	e.preventDefault();
	var nextPage = nowPage + 1;
	if (nowPage < piccountPage) {
		//console.log(123);
		textScroll.move(nextPage);
		nowPage++;
	}
});


$(function () {
	var mySwiper = new Swiper('.year-list.swiper-container', {
		slidesPerView: 6,
		resistanceRatio: 0
	})
	var mySwiperC = new Swiper('.remember-box .swiper-container', {
		resistanceRatio: 0,
		onSlideChangeStart: function () {
			$(".year-list li").eq(mySwiperC.activeIndex).addClass("active").siblings().removeClass("active");
			mySwiper.slideTo(mySwiperC.activeIndex, 1000, false)
		}
	})
	var mySwiperA = new Swiper('.remember-banner .swiper-container', {
		resistanceRatio: 0
	})
	mySwiperA.params.control = mySwiperC;
	mySwiperC.params.control = mySwiperA;
	$(".year-list li").click(function () {
		var index = $(this).index();
		mySwiperA.slideTo(index, 300, false)
		$(this).addClass("active").siblings().removeClass("active");
	})
})

// 常用swiper 参数

$(function () {
	var mySwiper = new Swiper('.swiper-container', {

		// 一般选择
		initialSlide: 1, //初始化 索引
		direction: 'vertical', //滑动方向
		speed: 1000, //滑动速度
		autoplay: 5000, // 自动播放
		autoplayDisableOnInteraction: false, //触碰后是否自动播放
		autoHeight: true, //容器高度自适应
		grabCursor: true, //鼠标手势
		// 响应式
		breakpoints: {
			//当宽度小于等于320
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			//当宽度小于等于480
			480: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			//当宽度小于等于640
			640: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		},

		// 切换效果
		effect: 'fade',

		// 点击事件
		preventClicks: false, //阻止 链接默认行为

		// 拖拉 弹性
		simulateTouch: false, //禁用鼠标拖拉
		resistanceRatio: 0, //边缘的弹性

		// 分页器
		pagination: '.swiper-pagination',
		paginationClickable: true, //点击
		// 自定义带数字的分页器
		paginationBulletRender: function (swiper, index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},

		// 控制器 
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',

		// 滚动条
		scrollbar: '.swiper-scrollbar', //定义滚动条
		scrollbarHide: false, //是否自动隐藏
		scrollbarDraggable: true, //是否可以拖拉

		// 网格系统
		slidesPerView: 2, //'auto' wrap 显示几个slider
		spaceBetween: 20, //slider的间隙
		slidesPerGroup: 3, //滑动一次的个数
		// 多行布局
		slidesPerColumn: 2, //两行
		slidesPerColumnFill: 'row', //填充的模式

		// 环路
		loop: true,

		// 放大
		zoom: true,

		// 回调函数
		// slide 滑动开始 调用
		onSlideChangeStart: function (swiper) {
			alert(swiper.activeIndex);
		},
		// slide 滑动结束 调用
		onSlideChangeEnd: function (swiper) {
			alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
		},
		// 点击slide 调用
		onTap: function (swiper) {
			alert('你tap了Swiper');
		}
	})
	// *** new swiper后

	// 双向控制
	Swiper1.params.control = Swiper2; //需要在Swiper2初始化后，Swiper1控制Swiper2
	Swiper2.params.control = Swiper1; //需要在Swiper1初始化后，Swiper2控制Swiper1

	// 属性
	mySwiper.activeIndex; //激活滑块的索引
	mySwiper.params.autoplay = 200; //swiper的初始化参数 可以重置参数

	// swiper 方法  runCallbacks 为 false 不触发onSlideChange
	mySwiper.slidePrev(runCallbacks, speed); //上一个
	mySwiper.slideNext(runCallbacks, speed); //下一个
	mySwiper.slideTo(index, speed, runCallbacks) //移动到指定slide
	mySwiper.destroy(true, true); //销毁swiper
	mySwiper.removeSlide(1); //移除第二个slide
	mySwiper.update(); //重新更新swiper数据
})