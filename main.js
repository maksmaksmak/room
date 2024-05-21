const btnPicture = document.querySelector('.chair-r')
const home = document.querySelector('.home')

btnPicture.onclick = changeOrderOfWalls

function changeOrderOfWalls() {
    console.log("click")
    home.classList.toggle('row-reverse')
}

const btnFrame = document.querySelector('.frame')
const wallRight = document.querySelector('.wall-right')

btnFrame.onclick = changeColorOfMobileWall

function changeColorOfMobileWall() {
    wallRight.classList.toggle('blue')
}


const btnAquarium = document.querySelector('.aquarium')
const fishSecond = document.querySelector('.fish-2')

btnAquarium.onclick = changeFish


function changeFish() {
    fishSecond.style.background = 'url(img/fish-3.png)'
    fishSecond.style.backgroundSize = 'cover'

    let audio = new Audio('voices/aquarium.mp3');
    audio.play();

}

const table = document.querySelector('.table')
const cabinet = document.querySelector('.cabinet')
const vase = document.querySelector('.sh-3')
const clock = document.querySelector('.sh-2')
const picture = document.querySelector('.sh-1')


table.onclick = soundTable
cabinet.onclick = soundCabinet
vase.onclick = soundVase
clock.onclick = soundClock
picture.onclick = soundPicture



function soundTable() {
    let audio = new Audio('voices/table.mp3');
    audio.play();
}

function soundCabinet() {
    let audio = new Audio('voices/cabinet.mp3');
    audio.play();
}

function soundVase() {
    let audio = new Audio('voices/vase.mp3');
    audio.play();
}

function soundClock() {
    let audio = new Audio('voices/wall clock.mp3');
    audio.play();
}

function soundPicture() {
    let audio = new Audio('voices/picture.mp3');
    audio.play();
}































