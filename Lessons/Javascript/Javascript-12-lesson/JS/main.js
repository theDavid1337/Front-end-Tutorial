// array methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // arr.slice(startIndex, stopIndex) >> copy
// // arr.splice(startIndex, deleteCount) >> cut

// let a = arr.splice(0, 3)

// console.log(arr.length); // 7
// console.log(a);



// let arrB = [11, 12, 13]

// console.log(arr.concat(arrB)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]



// function toUp(num) {
//     return num ** 2;
// }


// let arr = [1, 2, 3, 4, 5]

// arr.forEach(elem => {
//     console.log(elem ** 2);
// })


// let names = ['mike', 'john', 'sara']

// names.forEach(elem => {
//     for (let letter of elem) {
//         if (letter == 'r') {
//             console.log(elem); // sara
//         }
//     }
// })


// Task 1
// for (let i = 0; i < 10; i++) {
//     let randomNum = Math.round(Math.random() * 200)
//     arr.push(randomNum)
// }



// let arr = [1, 0, 5, 7, 15, 8, 20]
// for (let num of arr) {
//     let index = 0
//     if (num === 7) {
//         index = arr.indexOf(num)
//         arr.splice(index, 1)
//     }
// }
// console.log(arr);



// let arr = [1, 0, 5, 7, 15, 8, 20]

// arr.forEach(elem => {
//     let index = 0
//     if (elem % 5 == 0) {
//         index = arr.indexOf(elem)
//         arr.splice(index, 1)
//     }
// })

// console.log(arr);
// for (let num of arr) {
//     let index = 0
//     if (num % 5 == 0) {
//         index = arr.indexOf(num)
//         arr.splice(index, 1)
//     }
// }
// console.log(arr);


// let arr = [1, 0, 5, 7, 15, 8, 20]
// // for (let i = 0; i < 100; i++) {
// //     let randomNum = Math.round(Math.random() * 200)
// //     arr.push(randomNum)
// // }
// let helper_x = arr.filter(function (elem) {
//     if (elem % 5 !== 0) {
//         return elem;
//     }
// })
// console.log(helper_x);

// arr.forEach(elem => {
//     if (elem == 7) {

//     }
// })
// console.log(arr);



// let users = ['hakimova', 'hakimov', 'qobulova', 'suyunov', 'suyunova', 'qobulov']
// users.forEach(elem => {
//     let index = 0
//     if (elem.includes('va')) {
//         index = users.indexOf(elem)
//         users.splice(index, 1)
//     }
// })

// console.log(users);



// function countCase(a) {
//     let upperCase = 0
//     let lowerCase = 0
//     let space = 0
//     for (let letter of a) {
//         if (letter == ' ') {
//             space++
//         } else if (letter == letter.toUpperCase()) {
//             upperCase++
//         } else {
//             lowerCase++
//         }
//     }
//     console.log(`${a}\n${upperCase} - UpperCase\n${lowerCase} - LowerCase\n${space} - Space`);
// }
// countCase(prompt('Enter word to Count Cases and Spaces'))


function deleteAllSymbols(a) {
    let helper_str = ``
    for (let i = 0; i < a.length; i++) {
        if (a[i].startsWith('123456789!@#$%^&*()_=+/*-+.\/.,;:')) {
            continue
        } else {
            helper_str += a[i]
        }
    }
    console.log(helper_str);
}
deleteAllSymbols('shfjakgfaj21047120@!@#@$$&()_)*(^^jshjsdg-/*+_=/.,;:')