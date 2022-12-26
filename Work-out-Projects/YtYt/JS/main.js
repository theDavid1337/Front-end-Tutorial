let header = document.querySelector('header')
let menu = document.querySelector('.menu')
let burger_bars = document.querySelector('.burger_bars')
let nav_items = document.querySelectorAll('.nav_item')
let header_wrapper = document.querySelector('.header_wrapper')
let header_wrapper_updating = `
    position: sticky;
    width: 100%;
    top: 0;
    height: 60px;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(7.5px);
    border-radius: 0px;
`
let header_wrapper_default = `
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(7.5 px);
    border-radius: 75px;
    padding: .75em .50em;
`
let scrolling_line = document.querySelector('.scrolling_line')
let clientHeight = window.innerHeight

function toggleMenu() {
    menu.classList.toggle('active')
    burger_bars.classList.toggle('active')
}

nav_items.forEach(elem => {
    elem.addEventListener('click', () => {
        menu.classList.remove('active')
        burger_bars.classList.remove('active')
    })
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
        // console.log(window.scrollY);
        header_wrapper.style = header_wrapper_updating
    } else {}
    console.log(header.height);
    console.log(clientHeight);
    // scrolling_line.style.width = `${scrollY}`
})

function updateProgressBar() {
    const {
        scrollTop,
        scrollHeight
    } = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    let prbar = document.querySelector(".scrolling_line");
    prbar.style.width = `${scrollPercent}`;
}

function fixedHeader() {
    if (clientHeight = header) {
        console.log('hello');
    }
    console.log(clientHeight);
}
window.addEventListener('scroll', updateProgressBar);


function clientScroll() {
    window.scrollTo(0, clientHeight)
}