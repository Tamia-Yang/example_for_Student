
$("img").click(function(){
  $("img").removeClass("active");
  $(this).toggleClass("active");


  $(".testimonial .content").removeClass("active");
 $("#" + $(this).attr('data-alt')).addClass("active");

  })




