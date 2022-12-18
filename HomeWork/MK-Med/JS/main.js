let toggleMenu = document.querySelector(".toggleMenu"),
    menu = document.querySelector(".menu"),
    lines = document.querySelectorAll(".line"),
    nav_link = document.querySelectorAll(".nav_link")

toggleMenu.addEventListener("click", () => {
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle("open")
    }
    menu.classList.toggle("open")
})

for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].addEventListener("click", () => {
        for (let i = 0; i < lines.length; i++) {
            lines[i].classList.toggle("open")
        }
        menu.classList.toggle("open")
    })
}

window.addEventListener("scroll", () => {
    let header = document.querySelector("header")
    header.classList.toggle("scroll", window.scrollY > 0)
})