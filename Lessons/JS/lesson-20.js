// let box = document.querySelector('.box');


// window.addEventListener('contextmenu', () => {
//     let child = document.createElement('li');
//     child.textContent = 'contextmenu'
//     box.append(child)
// })

// window.addEventListener('mouseover', () => {
//     let child = document.createElement('li');
//     child.textContent = 'mouseover'
//     box.append(child)
// })

// window.addEventListener('click', () => {
//     let child = document.createElement('li');
//     child.textContent = 'click'
//     box.append(child)
// })

// window.addEventListener('keydown', () => {
//     let child = document.createElement('li');
//     child.textContent = 'keydown'
//     box.append(child)
// })

// window.addEventListener('beforeunload', () => {
//     let child = document.createElement('li');
//     child.textContent = 'beforeunload'
//     box.append(child)
// })

// console.log(document.forms);

// console.log(form.elements); // Elementlarini chiwarib beradi
// console.log(form.length); // Forma ning uzunligini chiqarib beradi
// console.log(form.action); // action atributi qiymati
// console.log(form.method); // method atributi qiymati

// let form = document.forms[0]

// for (elem of form.elements) {
//     elem.classList.add('form_control')
// }

// form.onsubmit = function (e) {
//     for (let item of e.target.elements) {
//         let p = document.createElement('p')
//         p.innerHTML = item.value;
//         document.querySelector('.data').append(p)
//     }
// }

// let str = '112415'

// let p = document.createElement('p')
// let form = document.forms[0]
// form.addEventListener('submit', () => {
//     let first_elem = form.elements[0].value
//     if (first_elem.endsWith('@gmail.com') || first_elem.endsWith('@mail.com') || first_elem.endsWith('@email.com')) {
//         p.innerHTML = 'True'Ц
//     } else {
//         p.innerHTML = 'False'
//     }
//     form.append(p)
// })