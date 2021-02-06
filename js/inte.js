/*
 * @Author: your name
 * @Date: 2021-02-05 14:40:24
 * @LastEditTime: 2021-02-05 14:47:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
$(function () {
  var timer;
  var num = 0;
  function ofo() {
    clearInterval(timer)
    timer = setInterval(function () {
      num++;
      if (num > 3) {
        num = 0;
      }
      $('ol').css('left', -num * 750 + 'px');
    }, 2000)
  }
  ofo()
  $('ol').hover(function () {
    clearInterval(timer)
  }, function () {
    ofo()
  });
  $('.pren').click(function (event) {
    num--;
    if (num < 0) {
      num = 3;
    }
    $('ol').css('left', -num * 750 + 'px');
  });
  $('.next').click(function (event) {
    num++;
    if (num > 3) {
      num = 0;
    }
    $('ol').css('left', -num * 750 + 'px');
  });
})