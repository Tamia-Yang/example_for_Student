$(".btn li").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  let numb = $(this).index();
  // console.log(numb);  
  $(".tab").removeClass("active");
  $(".tab").eq(numb).addClass("active");

})