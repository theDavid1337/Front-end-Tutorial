// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.forEach(elem => {
//     console.log(elem);
// })

// for (let item of arr) {
//     console.log(item);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let number = prompt()
// let helper_s = ``
// for (let i = 1; i < number.length + 1; i++) {
//     helper_s += `${number[i - 1]}`
//     console.log(helper_s);
// 


// str methods

// let single = 'single-quoted'
// let double = "double-quoted"

// let backticks = `backticks`

// console.log(single[3]); // G

// console.log('ali' [0] + 'vali' [2]); // AL
// let ali = `ali10`


// let s = `Lorem ipsum dolor`
// for (let i = 0; i < s.length; i++) {
//     console.log(s[i]);
// }
// console.log(s.length);


// let backticks = `\nbackticks`


// let backticks = `backticks`

// console.log(backticks.indexOf(`ck`)); // 2

// console.log(backticks.includes('ks')); // true
// console.log(backticks.includes('z')); // false

// console.log(backticks.startsWith('aaaa')); // false
// console.log(backticks.endsWith('ks')); // true


// function findReapedLetter(str, icon) {
//     let helper_x = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == icon) {
//             helper_x++
//         } else {
//             continue
//         }
//     }
//     console.log(`this ${icon} repeated ${helper_x} time(s)`);
// }
// findReapedLetter(prompt('Letter').toLowerCase(), prompt('Figure').toLowerCase())



// Task 2

// function findRepeatedWord(text, word) {
//     if (text.includes(word)) {
//         console.log(text.indexOf(word));
//     } else {
//         console.log(text.length);
//     }
// }
// findRepeatedWord(prompt('Text').toLowerCase(), prompt('Letter').toLowerCase())