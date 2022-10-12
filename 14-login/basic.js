$(".fa-star").click(function () {
  $(this).addClass("active");
  $(this).prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});
