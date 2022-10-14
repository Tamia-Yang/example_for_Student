$(".trigger").click(function(){
  $(this).toggleClass("active");
  $(".modal-gnb").fadeIn();

  if($(this).hasClass("active")){
    $(".modal-gnb").fadeIn();
  }else {
    $(".modal-gnb").fadeOut();
  }
})