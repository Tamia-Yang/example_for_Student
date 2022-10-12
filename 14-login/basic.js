$(".fa-star").click(function () {
  $(this).prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});
