const Num = document.querySelector(".count");
let inp = document.querySelector("input");

inp.addEventListener("keyup",function(){
  Num.innerHTML = inp.value.length;
})
