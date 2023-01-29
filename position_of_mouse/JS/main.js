let scroll_to = document.querySelector('.scroll')
let yes_crazy = document.querySelector('.yes_crazy')
let no_crazy = document.querySelector('.no_crazy')
let mouseX;
let mouseY;
window.addEventListener('mousemove', (elem) => {
    mouseX = elem.offsetX
    mouseY = elem.offsetY
    console.log(mouseX);
    console.log(mouseY);
})
