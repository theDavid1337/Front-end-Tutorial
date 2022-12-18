const tabsBox = document.querySelector('.tabs-box'),
    allTabs = document.querySelectorAll('.tab')
arrayIcons = document.querySelectorAll('.icon i')

let isDragging = false

const handlerIcons = () => {
    let scrollValue = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrayIcons[0].parentElement.style.display = scrollValue > 0 ? 'flex' : 'none';
    arrayIcons[1].parentElement.style.display = maxScrollableWidth > scrollValue ? 'flex' : 'none';
}


arrayIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        tabsBox.scrollLeft += icon.id === 'left' ? -350 : 350;
        setTimeout(() => handlerIcons(), 50);
    })
});

allTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabsBox.querySelector('.active').classList.remove('active')
        tab.classList.add('active')
    })
});

const dragging = (elem) => {
    if (!isDragging) return;
    tabsBox.classList.add('dragging')
    tabsBox.scrollLeft -= elem.movementX;
    handlerIcons()
}

const dragStop = () => {
    isDragging = false
    tabsBox.classList.remove('dragging')
}

tabsBox.addEventListener('mousedown', () => isDragging = true)
tabsBox.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)