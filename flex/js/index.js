$(document).ready(function(e){

    $(".menu li").hover(function(){
        $(this).children('.sub-menu').stop().fadeToggle();
    })
  
});