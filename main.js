const btnPicture = document.querySelector('.chair-r')
const home = document.querySelector('.home')

btnPicture.onclick = changeOrderOfWalls

function changeOrderOfWalls() {
    console.log("click")
    home.classList.toggle('row-reverse')
}
