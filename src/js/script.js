$(window).scroll(function(){
    setTimeout(function(){
        if(window.pageYOffset > 350){
        $('.color').css('color','black');
        $('.backcolor').css('background-color','black');
        } else{
            $('.color').css('color','white');
            $('.backcolor').css('background-color','white');            
        }
    },30);
  });


var $page = $('html, body');
  $('a[href*="#about"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 900);
      return false;
  });

$('.hamburger').click(function(){
    $('.overlay_active').addClass('overlay');
    $('.menu_background').addClass('menu_background_active');
});

$('.overlay_close').click(function(){
    $('.overlay_active').removeClass('overlay');
    $('.menu_background').removeClass('menu_background_active');
});