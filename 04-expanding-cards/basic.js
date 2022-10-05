
const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    const copyText = document.getElementById("maintext");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // for mobile devices
    
    navigator.clipboard.writeText(copyText.value);
    btn.textContent = "copyed!!";

    setTimeout(()=>{
        btn.textContent = "copy";
    },1000)
   

   
})

