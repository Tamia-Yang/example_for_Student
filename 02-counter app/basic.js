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
    setColor()
})

function setColor(){
    if(result.innerHTML == 0){
        result.style.color = "white";
    }else if(result.innerHTML < 0 ){
        result.style.color = "red";
    }else{
        result.style.color = "green";
    }
}