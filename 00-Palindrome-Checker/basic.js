const btn = document.querySelector("button");
const pp = document.querySelector("p");


btn.addEventListener("click",function(){
    let word = document.querySelector(".input-text").value;
    let  len = word.length;
    let start = word.substring(0, Math.floor(len / 2));
    let end = word.substring(len - Math.floor(len / 2));
    let flip = [...end].reverse("").join("");

    if(start == flip){
        pp.innerHTML = "your are right";
    }else {
        pp.innerHTML = "TRY AGAIN";
    }


})

