$(document).ready(function () {

  $('.dot1').hover(function(){
    $('.p1').toggleClass('dothover')
  })
  $('.dot2').hover(function(){
    $('.p2').toggleClass('dothover')
  })
  $('.dot3').hover(function(){
    $('.p3').toggleClass('dothover')
  })
  $('.dot4').hover(function(){
    $('.p4').toggleClass('dothover')
  })
  $('.dot5').hover(function(){
    $('.p5').toggleClass('dothover')
  })
  $('.dot6').hover(function(){
    $('.p6').toggleClass('dothover')
  })
  $('.bars').click(function(){
    $('.bar1').toggleClass('bar1_ac')
    $('.bar2').toggleClass('bar2_ac')
    $('.bar3').toggleClass('bar3_ac')
  })
  $('.bx2').click(function(){
    $('.nin').addClass('hide');
    $('.bx2').addClass('hide');
    $('.thank').addClass('show');
  })
  $('.it1').click(function(){
    $('body, html').animate({scrollTop: $('.land').offset().top}, 500)
  })
  $('.it2').click(function(){
    $('body, html').animate({scrollTop: $('.bg2, .feat2').offset().top}, 500)
  })
  $('.it3').click(function(){
    $('body, html').animate({scrollTop: $('.feature1').offset().top}, 500)
  })
  $('.it4').click(function(){
    $('body, html').animate({scrollTop: $('.bg4').offset().top}, 500)
  })

})
