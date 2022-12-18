let arr = [0, null, true, [1, 2, 3], {
    name: 'John'
}];
console.log(typeof arr);
arr.push(1)
console.log(arr);
console.log(arr[arr.length - 1].name);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// let arr = []
// for (let i = 0; i < 100; i++) {
//     let randomNum = Math.round(Math.random() * 100)
//     arr.push(randomNum)
// }

// function getEven(arr) {
//     for (let num of arr) {
//         if (num % 2 == 0) {
//             console.log(num ** 2);
//         }
//     }
// }
// getEven(arr)


// for (let element of arr) {
//     if (element % 2 == 0) {
//         console.log(element ** 2);
//     }
// }


// arr.forEach(elem => {
//     console.log(elem);
// })



// function anotherFunc(a, b, c, d) {
//     let helper_str = ``
//     helper_str += a.toLowerCase()
//     console.log(b);
//     console.log(helper_str);
// }
// anotherFunc('Hello', 'tiktok', 'Utility', 'Like')
// anotherFunc(prompt('1'), prompt('2'), prompt('3'), prompt('4'))
// List
// Style
// TYPE
// none

// listStyleTypeNone

// acmp.ru


// function getCapitalizeLetter(a) {
//     let helper_x = ``
//     let helper_y = ``
//     for (let i = 0; i < a.length; i++) {
//         if (i !== 0) {
//             helper_x = a.toLowerCase()
//         } else {
//             helper_y += a[0].toUpperCase()
//         }
//     }
//     console.log(helper_x);
//     console.log(helper_y);
// }
// getCapitalizeLetter('tiktok')

// function replaceLetter(text, letter, replaceChar) {
//     let helper_str = ``
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == letter) {
//             helper_str += replaceChar
//         } else {
//             helper_str += text[i]
//         }
//     }
//     console.log(helper_str);
// }
// replaceLetter(prompt('Text').toLowerCase(), prompt('Letter').toLowerCase(), prompt('replaceChar').toLowerCase())



// function getCapitalizeChar(a) {
//     let str_All = ``
//     let helper_str = ``
//     let helper_x
//     for (let i = 1; i <= a; i++) {
//         helper_x = prompt(`${i} - Word`)
//         str_All += helper_x
//     }
//     if (str_All) {
//         for (let i = 0; i < helper_x.length; i++) {
//             if (i == 0) {
//                 helper_str += helper_x[i].toUpperCase()
//             } else {
//                 helper_str += helper_x[i].toLowerCase()
//             }
//         }
//     }
//     console.log(str_All);
//     console.log(helper_str);
// }
// getCapitalizeChar(+prompt('How many words do you want to Captalize?'))




// function getCapitalize() {

// }