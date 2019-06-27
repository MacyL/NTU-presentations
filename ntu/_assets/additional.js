


$( document ).ready(function() {
  setInterval(function(){
    $('.nav_active').removeClass("nav_active");
    if($('.present section').children('.intro').length > 0) {
        $('#intro').addClass("nav_active");
     } else if($('.present section').children('.methods').length > 0) {
        $('#methods').addClass("nav_active");
     } else if($('.present section').children('.workflows').length > 0) {
        $('#workflows').addClass("nav_active");
     } else if($('.present section').children('.modeling').length > 0) {
        $('#modeling').addClass("nav_active");
     } else if($('.present section').children('.outlook').length > 0) {
        $('#outlook').addClass("nav_active");
     }
   }, 800);
});
