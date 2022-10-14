$(".title").click(function(){
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).siblings(".accordion .content").slideUp(); // pointing siblings  is importing.
  $(this).next().stop().slideToggle(350);
})