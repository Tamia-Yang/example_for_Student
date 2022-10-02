
const btn = document.querySelector("button");

btn.addEventListener("click",cangeColor);

function cangeColor(){
    let ColorNumber = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + ColorNumber ;
    document.querySelector("span").innerHTML ="#" + ColorNumber ;
}


