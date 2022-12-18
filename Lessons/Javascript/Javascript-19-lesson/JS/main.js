// // // let box = document.querySelector('.box')

// // // function changeLocation(innerBox) {
// // //     if (innerBox.textContent == 'Top') {
// // //         box.style.top = '100px';
// // //     }
// // //     if (innerBox.textContent == 'Left') {
// // //         box.style.left = '100px';
// // //     }
// // //     if (innerBox.textContent == 'Right') {
// // //         box.style.right = '100px';
// // //     }
// // //     if (innerBox.textContent == 'Bottom') {
// // //         box.style.bottom = '-200px';
// // //     }
// // // }

// // // let p = document.querySelector('p')
// // // let myStyle = `
// // //     background: #1abe84;
// // //     color: #fff;
// // //     text-align: center;
// // //     font-size: 25px;
// // //     padding: 5px;
// // //     cursor: poointer;
// // // `
// // // p.style = `${myStyle}`

// // // let color = ['red', 'green', 'blue']
// // // setInterval(() => {
// // //     p.style.backgroundColor = color[Math.round(Math.random() * color.length)]
// // // }, 100);

// // // function minScroll() {
// // //     window.scrollTo(0, 0)
// // // }

// // // function maxScroll() {
// // //     let s = window.scrollY
// // //     console.log(s);
// // //     window.scrollTo(0, window.scrollY += 500)
// // // }

// // // let p = document.querySelector('p')
// // // p.addEventListener('contextmenu', () => {
// // //     console.log('Mouse Event');
// // // })

// // // window.addEventListener('keydown', (e) => {
// // //     // console.log(this.event); // Joriy hodisa obyekti
// // //     console.log(e.key); // Joriy hodisa obyekti
// // //     // console.log(e.target); // hodisa ro'y bergan element
// // // })

// // // window.addEventListener('keyup', (elem) => {
// // //     if (elem.key === 'b' && elem.ctrlKey === true) {
// // //         window.open('https://cdnjs.com/libraries/font-awesome')
// // //     }
// // // })

// // // let str = ``
// // // let box = document.querySelector('.box')

// // // document.addEventListener('keyup', (elem) => {
// // //     str += elem.key
// // //     box.innerHTML = str
// // //     for (let i = 0; i > str.length; i < 0) {
// // //         if (!str[i].includes('1234567890-=!@#$%^&*()_+')) {
// // //             console.log(str[i]);
// // //         } else {
// // //             console.log(str);
// // //         }
// // //     }
// // // })



// // // Ctrl + C // Nusxa olish
// // // Ctrl + V // Nusxani Qoshirish
// // // Ctrl + X // Qirqib olish

// // // Ctrl + N // yangi fayl yaratish
// // // Ctrl + Shift + S // faylni saqlamoq

// // // <h1>Salom Dasturchi </h1> // Heading 1
// // // <h2>Salom Dasturchi </h2> // Heading 2
// // // <h3>Salom Dasturchi </h3> // Heading 3
// // // <h6>Salom Dasturchi </h6> // Heading 6

// // // <p>Salom</p>

// // // let box = document.querySelector(".box");
// // // let helper = "";
// // // window.addEventListener("keydown", function (inputLatter) {
// // //     let word = "qwertyuioplkjhgfdsazxcvbnm";
// // //     if (word.includes(inputLatter.key)) {
// // //         helper += inputLatter.key
// // //     }
// // //     if (includes.key === " ") {
// // //         helper += " ";
// // //     }
// // //     box.innerHTML = helper;
// // // })



// // let digit = 1;

// // function keyloggerFunc() {
// //     hint.removeAttribute('onclick')
// //     window.addEventListener('keydown', (elem) => {
// //         if (elem.code == 'Backspace') {
// //             function removeChar(lastElem, replaceChar) {
// //                 // box.innerHTML = out_put.slice(0, out_put.length - digit);
// //                 // if (box.innerHTML.length == -1) {
// //                 //     box.innerHTML = ''
// //                 //     console.log(out_put.length);
// //                 //     digit = 1
// //                 // }
// //                 // digit++
// //                 // console.log('else');
// //             }
// //             removeChar(box.textContent[box.textContent.length - 1], '')
// //             console.log();
// //         } else {
// //             for (let i = 0; i < helper_str.length; i++) {
// //                 if (elem.key == helper_str[i]) {
// //                     out_put += elem.key
// //                     box.innerHTML = out_put
// //                 }
// //             }
// //             console.log('if');
// //         }
// //     })
// // }

// // function removeBackspace() {
// //     let out_put = ``
// //     for (let item of text) {
// //         if (item == letter) {
// //             out_put += replaceChar
// //         } else [
// //             out_put += item
// //         ]
// //     }
// //     console.log(out_put);
// // }

// // // window.addEventListener('keydown', (elem) => {
// // //     if (elem.code == 'Backspace') {
// // //         // box.textContent.slice(0, -1)
// // //         console.log(box.innerHTML);
// // //     }
// // // })

// // // const myString = "linto.yahoo.com.";
// // // const stringLength = myString.length; // this will be 16
// // // console.log('lastChar: ', myString.slice(0, stringLength - 1)); // this will be the string

// let box = document.querySelector('.box')
// let outPut_str = ''
// let outPut_arr = []
// let result_str = ''
// let hint = document.querySelector('.hint')
// let helper_str = 'qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM'
// let helper_arr = []
// let digit = 1
// for (let i = 0; i < helper_str.length; i++) {
//     helper_arr.push(helper_str[i])
// }

// function keyloggerFunc() {
//     hint.removeAttribute('onclick')
//     console.log('Starting...');
//     window.addEventListener('keydown', (elem) => {
//         console.log('Pressing...');
//         if (elem.key == 'Backspace') {
//             console.log('Backspace...');
//             outPut_arr.pop()
//             console.log(outPut_arr);
//             for (let i = 0; i < outPut_arr.length; i++) {
//                 result_str = outPut_arr[i]
//             }
//             console.log(result_str);
//             // outPut_arr.forEach(backSpaceItem => {
//             //     result_str += backSpaceItem
//             //     console.log(result_str);
//             // })
//             if (outPut_arr.length == digit) {
//                 digit = 1
//             }
//             digit++
//         } else {
//             console.log('Buttons...');
//             helper_arr.forEach(item => {
//                 if (elem.key == item) {
//                     console.log('Sorting...');
//                     outPut_arr.push(item)
//                     outPut_str += item
//                 }
//             })
//         }
//         box.innerHTML = outPut_str
//     })
// }