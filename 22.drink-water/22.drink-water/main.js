$(".cup-small").click(function () {
    $(this).addClass("full");
    $(this).prevAll().addClass("full");
    $(this).nextAll().removeClass("full");
})