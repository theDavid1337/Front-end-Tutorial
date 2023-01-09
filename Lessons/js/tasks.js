// // Task 1
// function checkNumber(text) {
//     let numberStr = '+01123456789'
//     let helper_str = ''
//     let helper_arr = []
// for (let item of text) {
//     if (!item.includes(' ')) {
//         helper_str += item
//     }
// }
//     if (helper_str.length == 13 && helper_str.startsWith('+998')) {
//         for (let i = 0; i < helper_str.length; i++) {
//             for (let letter of numberStr) {
//                 if (helper_str[i] == letter) {
//                     helper_arr.push(helper_str[i])
//                 } else {

//                 }
//             }
//         }
//     } else {
//         console.log('Try again');
//     }
//     return helper_str
// }
// let numbers = ['998 976 54 77', '+998 975 4136', '+998 abs ab ab', '+998 90 571 83 50']
// for (const item of numbers) {
//     checkNumber(item)
// }