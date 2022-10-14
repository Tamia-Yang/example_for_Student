
$(".content").eq(0).show();
$(".accordion .title").click(function(){

  $(this).next().stop().slideToggle(300);
  $(this).addClass("active");
})
$(".content").click(function(){
  $(this).stop().slideUp();
 
})