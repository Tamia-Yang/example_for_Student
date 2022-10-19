$(".cup-small").click(function () {

    $(this).toggleClass("full");
    $(this).prevAll().addClass("full");
    $(this).nextAll().removeClass("full");
    updateBigCup();
})

const percentage = document.querySelector(".percentage");
const smallCups = document.querySelectorAll(".cup-small");
const remained = document.querySelector(".remained");
const totalCups = smallCups.length;
const liters = document.querySelector("#liters");

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    // console.log(fullCups);
    if (fullCups == 0) {
        remained.style.visibility = "visible";
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        percentage.style.visibility = "visible";
        remained.style.height = 0;
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    } else {
        remained.style.visibility = "visible";
        percentage.style.visibility = "visible";
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`

}