let ul = document.createElement('ul')
let hover_block = document.querySelector('.hover_block')
let position_top;
let position_left;
ul.setAttribute('class', 'wrapper')
for (let i = 0; i < 500; i++) {
    let li = document.createElement('li')
    li.setAttribute('class', 'block')
    ul.append(li)
}

document.body.append(ul)
document.addEventListener('mousemove', (elem) => {
    position_top = elem.offsetY;
    position_left = elem.offsetX;
    hover_block.style.top = elem.offsetY;
    hover_block.style.left = elem.offsetX
})