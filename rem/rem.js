(function(win) {
  var timer;

  function setRem() {
    var winHtml = win.document.documentElement;
    var width = winHtml.getBoundingClientRect().width;
    if (width >= 800) {
      width = 800
    }
    var rem = width / 10;
    winHtml.style.fontSize = rem + 'px';
  }
  setRem();
  // 改变分辨率 
  win.addEventListener('resize', function() {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300);
  }, false);
  // 显示时候
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(timer);
      timer = setTimeout(setRem, 300);
    }
  }, false);
})(window)