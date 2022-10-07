$(".split").on("mouseover",function(){
    if($(this).hasClass("right")){
        $(".right").css("width", "100%");
        $(".left").css("width", "50%");
    }else if($(this).hasClass("left")) {
        $(".left").css("width", "100%");
        $(".right").css("width", "50%");
    }
})