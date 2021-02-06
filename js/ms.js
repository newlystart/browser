/*
 * @Author: your name
 * @Date: 2021-02-05 14:40:24
 * @LastEditTime: 2021-02-05 14:47:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
$(function () {
  $('section>div').eq(0).removeClass('on').siblings().addClass('on');
  $('ol li').click(function (event) {
    var index = $(this).index();
    $(this).addClass('nav');
    $(this).siblings().removeClass('nav')
    $('section').stop().animate({
      'top': -100 * index + '%'
    }, 500);
    $('section>div').eq(index).removeClass('on').siblings().addClass('on');
  });
  $('.pic').click(function (event) {
    if ($(this).hasClass('music')) {
      $('audio')[0].pause()
      $(this).removeClass('music');
    } else {
      $('audio')[0].play()
      $(this).addClass('music')
    }
  });
  var num = 0;
  var timer;
  $(document).mousewheel(function (e, d) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      num -= d;
      if (num > 6) {
        num = 6
      }
      if (num < 0) {
        num = 0;
      }
      $('section').stop().animate({
        'top': -100 * num + '%'
      }, 400);
      $('ol li').eq(num).addClass('nav');
      $('ol li').eq(num).siblings().removeClass('nav');
      $('section>div').eq(num).removeClass('on').siblings().addClass('on');
    }, 500)
  })
})
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3b38ff04bc01277acd1ed9703d90a8a5";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();