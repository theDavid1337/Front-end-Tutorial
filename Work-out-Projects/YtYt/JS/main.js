let header = document.querySelector('header'),
    menu = document.querySelector('.menu'),
    burger_bars = document.querySelector('.burger_bars'),
    nav_items = document.querySelectorAll('.nav_item'),
    header_wrapper = document.querySelector('.header_wrapper'),
    arrow_circle_icon_top = document.querySelector('.arrow_circle_icon_top'),
    scrolling_line = document.querySelector('.scrolling_line'),
    clientHeight = window.innerHeight,
    section_second_tags = document.querySelectorAll('.section_second_tags'),
    tag_colors = ['#5096FF', '#FFB359', '#FF6F50', '#4BD071', '#50C0FF', '#4B77B9', '#AF93FF'],
    video_btn_circle = document.querySelector('.video_btn_circle');

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
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
    if (window.scrollY > 130) {
        arrow_circle_icon_top.classList.add('active')
    } else {
        arrow_circle_icon_top.classList.remove('active')
    }
    updateProgressBar()
})

function updateProgressBar() {
    const {
        scrollTop,
        scrollHeight
    } = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    // let prbar = document.querySelector(".scrolling_line");
    scrolling_line.style.width = `${scrollPercent}`;
}


function clientScroll() {
    window.scrollTo(0, clientHeight - 15)
}

function changeTagColor(colors) {
    for (let i = 0; i < colors.length; i++) {
        section_second_tags[i].style.background = colors[i]
    }
}
changeTagColor(tag_colors)


function videoFunc() {
    video_btn_circle.classList.toggle('active')
}
videoFunc()