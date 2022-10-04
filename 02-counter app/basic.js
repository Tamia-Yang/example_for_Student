const btn = document.querySelector(".set");
let result = document.querySelector(".count");

btn.addEventListener("click",(e)=>{
    if(e.target.classList.contains("add")){
        result.innerHTML++;
    }else if(e.target.classList.contains("sub")){
        result.innerHTML--;
    }else{
        result.innerHTML = 0;
    }
})
