const toggling = document.querySelectorAll(".toggle");
console.log(toggling);

toggling.forEach(tog => {
  tog.addEventListener("click",function(){
    tog.parentNode.classList.toggle("active")
  })
})