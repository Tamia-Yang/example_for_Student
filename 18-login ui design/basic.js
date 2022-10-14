$(".trigger").click(function(){
  $(this).toggleClass("active");
  $(".modal-gnb").fadeToggle();

  // if($(this).hasClass("active")){
  //   $(".modal-gnb").fadeIn();
  // }else {
  //   $(".modal-gnb").fadeOut();
  // }
})