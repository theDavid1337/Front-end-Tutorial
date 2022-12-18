// let text = document.querySelector('.text')

// console.log(text.tagName);
// console.log(text.textContent);

// text.innerHTML = 'Lorem ipsum Dolor'

// text.outerHTML = '<span>Hello</span>'
// text.hidden = true
// setInterval(() => text.hidden = !text.hidden, 10);
// let list = document.querySelector('ul')
// let names = ['David', 'Fred', 'Samuel', 'Crazy']

// for (let i = 0; i < list.children.length; i++) {
//     list.children[i].textContent = names[i]
// }
// document.createElement('ul')
// let listNumber = document.querySelector('ul')
// console.log(listNumber);
// for (let i = 0; i < 5; i++) {
//     listNumber.innerHTML = '<li></li>'
// }
// // console.log(text);


// let numbers = [1, 7, 3, 5, 9].sort((a, b) => a - b)
// for (let i = 0; i < listNumber.children.length; i++) {
//     listNumber.children[i].textContent = numbers[i]
// }

// function changeElem() {
//     let box = document.querySelector('.box')

//     if (box.hasAttribute('name')) {
//         box.removeAttribute('name')
//     } else {
//         box.setAttribute('name', 'circle')
//     }
// }



function changeColor() {
    let listNumber = document.querySelector('#number')
    for (let i = 0; i < listNumber.children.length; i++) {
        let red = Math.round(Math.random() * 255)
        let green = Math.round(Math.random() * 255)
        let blue = Math.round(Math.random() * 255)

        for (let i = 0; i < listNumber.children.length; i++) {
            let randomColor = `background-color:rgb(${red},${green},${blue})`
            console.log(listNumber.children[i]);
            listNumber.children[i].setAttribute('style', randomColor)
        }
    }

}                                           