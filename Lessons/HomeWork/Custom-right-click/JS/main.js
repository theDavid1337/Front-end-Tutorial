const conTextMenu = document.querySelector('.wrapper'),
    share_menu = document.querySelector('.share_menu');


document.addEventListener('contextmenu', elem => {
    elem.preventDefault();
    let x = elem.offsetX,
        y = elem.offsetY,
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        cmWidth = conTextMenu.offsetWidth,
        cmHeight = conTextMenu.offsetHeight;

    if (x > (winWidth - cmWidth - share_menu.offsetWidth)) {
        share_menu.style.left = '-200px'
    } else {
        share_menu.style.left = ''
        share_menu.style.right = '-200px'
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y;


    conTextMenu.style.left = `${x}px`
    conTextMenu.style.top = `${y}px`
    conTextMenu.style.visibility = 'visible'
})

document.addEventListener('click', () => {
    conTextMenu.style.visibility = 'hidden'
})