// Lesson 3
// CreateElement

// let li = document.createElement('li')
// li.className = 'item'
// li.textContent = 'apple'
// // li.style.cssText('color:green')

// ul.prepend(li) // element boshiga qoshiladi
// ul.append(li) // element oxiriga qoshiladi
// ul.before(li) // ul elementidan avval qoshish
// ul.after(li) // ul elementidan kegin qoshish
// li.remove() // elementni ochirish

// // console.log(li);
// let orange = document.querySelector('.orange')

// orange.replaceWith(li) // korsatilgan element o'rniga qoshish


// let ul = document.querySelector('.list')

// let names = ['John', 'Mike', 'Sara']
// for (let name of names) {
//     let li = document.createElement('li')
//     li.textContent = name
//     ul.append(li)
// }

// let wrapper = document.querySelector('.container')
// let randomNum = Math.round(Math.random() * 30 + 1)
// for (let i = 0; i < randomNum; i++) {
//     let helperRandomNum = Math.round(Math.random() * 50 + 10)
//     let box = document.createElement('div')
//     box.className = 'box'
//     box.setAttribute('onclick', 'showNumber(this)')
//     box.textContent = helperRandomNum
//     wrapper.append(box)
// }

// function showNumber(innerInfo) {
//     let box = document.createElement('div')
//     box.classList.toggle('off')
//     wrapper.classList.toggle('helper')
//     let paragraph = document.createElement('p')
//     paragraph = innerInfo.textContent
//     wrapper.append(paragraph)
// }


// let main = document.querySelector('.main')

// // main.className = 'box'

function theme(elem) {
    document.body.classList.toggle('dark')
    // if (elem.children[0].classList.contains('fa-sun')) {
    //     elem.children[0].classList.remove('fa-sun')
    //     elem.children[0].classList.add('fa-moon')
    // } else {
    //     elem.children[0].classList.remove('fa-moon')
    //     elem.children[0].classList.add('fa-sun')
    // }
}