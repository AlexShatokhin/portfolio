$(window).scroll(function(){
    setTimeout(function(){
        if(window.pageYOffset > 350){
        $('.color').css('color','black');
        $('.backcolor').css('background-color','black');
        } else{
            $('.color').css('color','white');
            $('.backcolor').css('background-color','white');            
        }
        console.log(window.pageYOffset)
        if(window.pageYOffset > 1400){
            $('.skill_line_main').animate({left:'0px'},'slow');
        }
    },30);
  });


let $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 900);
      return false;
  });

$('.hamburger').click(function(){
    $('.overlay_active').addClass('overlay');
    $('.menu_background').addClass('menu_background_active');
});

$('.close').click(function(){
    $('.overlay_active').removeClass('overlay');
    $('.menu_background').removeClass('menu_background_active');
});

$('.connection_text form').validate({
    rules: {
        name: "required",
        email: {
          required: true,
        }, 
      },
      messages: {
        name: {
          required:"Пожалуйста, введите своё имя",
        },
        email: {
          required: "Пожалуйста, введите свою эл. почту",
          email: "E-mail адрес должен содержать @"
        },
      }
  });