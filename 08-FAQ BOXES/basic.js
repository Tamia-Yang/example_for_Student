
  const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",checkLen);
checkLen()

 function checkLen(){
    let triggerLine = window.innerHeight / 5 * 4;
 
    cards.forEach(box => {
        let boxBottom = box.getBoundingClientRect().bottom;
        if(boxBottom < triggerLine){
          box.classList.add("active");
        }else {
            box.classList.remove("active");
        }

    })
 }


