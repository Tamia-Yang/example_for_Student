
$(".content").eq(0).show();
$(".accordion-item .title").click(function(){
  $(this).siblings(".content").slideUp();
  $(this).next().stop().slideToggle(300);
})
$(".content").click(function(){
  $(this).stop().slideUp();
})