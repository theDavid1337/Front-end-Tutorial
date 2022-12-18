// // let input = document.querySelector('#input')

// // function block() {
// //     input.setAttribute('disabled', '')
// // }

// // function unBlock() {
// //     input.removeAttribute('disabled')
// // }



// // function changeValue() {
// //     let first = document.querySelector('#first')
// //     let second = document.querySelector('#second')
// //     let a = '';
// //     let b = '';

// //     a += first.value
// //     b += second.value

// //     first.value = b
// //     second.value = a
// // }

// // function showHideBar() {
// //     let box = document.querySelector('.box')
// //     let button = document.querySelector('.button')
// //     box.classList.toggle('none')
// //     let helper_x = 'Able'
// //     let helper_y = 'Disable'
// //     if (button.textContent == helper_x) {
// //         button.textContent = helper_y
// //     } else {
// //         button.textContent = helper_x
// //     }
// // }

// let box_1 = document.querySelector('.box_1')
// let box_2 = document.querySelector('.box_2')
// let box_3 = document.querySelector('.box_3')
// let box_4 = document.querySelector('.box_4')

// box_1.addEventListener('click', () => {
//     box_1.classList.toggle('green')
// })

// box_2.addEventListener('click', () => {
//     box_2.classList.toggle('green')
// })

// box_3.addEventListener('click', () => {
//     box_3.classList.toggle('green')
// })

// box_4.addEventListener('click', () => {
//     box_4.classList.toggle('green')
// })

// if (box_1.classList == 'green') {
//     box_2.className.remove('green')
//     box_3.className.remove('green')
//     box_4.className.remove('green')
// }

// if (box_2.classList == 'green') {
//     box_1.className.remove('green')
//     box_3.className.remove('green')
//     box_4.className.remove('green')
// }

// if (box_3.classList == 'green') {
//     box_1.className.remove('green')
//     box_2.className.remove('green')
//     box_4.className.remove('green')
// }

// if (box_4.classList == 'green') {
//     box_1.className.remove('green')
//     box_2.className.remove('green')
//     box_3.className.remove('green')
// }

let helper_x = 0
let helper_y = 0
let output = document.querySelector('.output')


function plus(button) {
    helper_x = button.textContent
    helper_y = helper_y + Number(helper_x)
    output.innerHTML = helper_y
}