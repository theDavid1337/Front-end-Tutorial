// function data(text) {
//     let day = 0;
//     let hour = 0;
//     for (let i = 0; i < text.length; i++) {
//         if (text[i].includes("-")) {
//             day++;
//         } else if (text[i].includes(":")) {
//             hour++;
//         }
//     }
//     if (day == 2 && hour == 2) {
//         console.log("yil , oy , kun   soat , daqiqa , sekund")
//     } else if (day == 2 && hour == 1) {
//         console.log("yil , oy , kun  soat , daqiqa ")
//     } else if (day == 1 && hour == 1) {
//         console.log("yil , oy  soat , daqiqa")
//     } else if (day == 1 && hour == 2) {
//         console.log('yil , oy , soat , daqiqa , sekund');
//     }
// }
// data("2006-10 10:20:10");

// 2006-10-25
// 14:30:59


// let box = document.querySelector('.box')
// let input = document.querySelector('input')
// window.addEventListener('keydown', (elem) => {
//     setInterval(() => {
//         let myStyle = `background: ${input.value}`
//         box.style = myStyle
//     }, 100);
// })





// function sortTypes(text) {
//     console.log(text);
//     let sortedNumber = []
//     let sortedString = []
//     let sortedBoolean = []
//     let sortedObjects = []
//     let helper_str = ''
//     // let nullArr = [null]

//     for (let i = 0; i < text.length; i++) {
//         if (text[i] / text[i] == 1) {
//             sortedNumber.push(text[i])
//         } else if (text[i] == 0) {
//             sortedNumber.push(text[i])
//         } else {
//             if (text[i] + text[i + 1] + text[i + 2] + text[i + 3] == 'true') {
//                 sortedBoolean.push(true)
//             } else if (text[i] + text[i + 1] + text[i + 2] + text[i + 3] + text[i + 4] == 'false') {
//                 sortedBoolean.push(false)
//             } else if (text[i] + text[i + 1] + text[i + 2] + text[i + 3] == 'null') {
//                 sortedObjects.push(null)
//             } else {
//                 sortedString.push(text[i])
//             }
//         }
//     }
//     console.log(sortedNumber);
//     console.log(sortedString);
//     console.log(sortedBoolean);
//     console.log(sortedObjects);
// }
// let str = '1234567890-qwertyuiopasdfghjktruefalsenull'
// sortTypes(str.toLowerCase())