// const right = document.querySelector(".right");
// const left = document.querySelector(".left");
// const container = document.querySelector(".container");

$(".split").on("click",function(){
    if($(this).hasClass("right")){
        console.log("right");
    }else if($(this).hasClass("left")) {
        console.log("left");
    }
})