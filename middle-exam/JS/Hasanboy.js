// Task 1
// let arr = []
// for (let i = 0; i < 10; i++) {
//     let randomNum = Math.round(Math.random() * 50)
//     arr.push(randomNum)
// }
// console.log(arr);

// Task 2
// let arr = [1, 2, 400, 5, 6, 98, 100].sort((a, b) => b - a)
// console.log(arr[0]);

// Task 3
// function countAllT() {
//     let counter = 0
//     let w = ['Javascript', 'Docker', 'GitHub', 'Bitbucket']
//     w.forEach(elem => {
//         for (let i = 0; i < elem.length; i++) {
//             if (elem[i].toLowerCase() == 't') {
//                 counter++
//             }
//         }
//     })
//     return counter
// }
// console.log(countAllT());

// Task 4
// for (let i = 0; i <= 40; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// Task 5
// for (let i = 0; i <= 90; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }

// Task 6
// function findNumbers(user_prompt) {
//     let numbers = '1234567890'
//     let arr = []
//     for (let letter of user_prompt) {
//         for (let number of numbers) {
//             if (letter == number)[
//                 arr.push(letter)
//             ]
//         }
//     }
//     return arr
// }
// console.log(findNumbers('wqzwexrdctvybuhnoimo,123456e172124141847124'));

// Task 7
// let fruit = 'ananas'
// console.log(fruit[4] + fruit[5] + fruit[3] + fruit[2] + fruit[1] + fruit[0]);

// Task 8
// let control = true
// while (control) {
//     let newPrompt = prompt('any fruit name...')
//     if (newPrompt.toLowerCase() == 'stop') {
//         control = false
//         console.log('stopped');
//     } else {
//         control = true
//     }
// }

// Task 9 
// let n = 21
// let counterBanana = 0
// let counterWater = 0
// for (let i = 1; i <= n; i++) {
//     if (i % 7 == 0) {
//         counterBanana++
//     }
//     if (i % 3 == 0) {
//         counterWater++
//     }
// }
// console.log(`${counterBanana} - Banana\n${counterWater} - Water`);

// task 10
// let control = true
// while (control) {
//     let newPrompt = prompt('any fruit name...')
//     if (newPrompt.toLowerCase() == 'gandi123') {
//         control = false
//         console.log('stopped');
//     } else {
//         alert('try again...')
//         control = true
//     }
// }

// Task 11
// function checkChess(user_prompt) {
//     let result_black = 0
//     let arrWhite = ['a2', 'a4', 'a6', 'a8', 'b1', 'b3', 'b5', 'b7', 'c2', 'c4', 'c6', 'c8', 'd1', 'd3', 'd5', 'd7', 'e2', 'e4', 'e6', 'e8', 'f1', 'f3', 'f5', 'f7', 'g2', 'g4', 'g6', 'g8', 'h1', 'h3', 'h5', 'h7']
//     arrWhite.forEach(elem => {
//         if (user_prompt == elem) {} else {
//             result_black++
//         }
//     })
//     if (arrWhite.length - result_black == 1) {
//         console.log('White');
//     } else {
//         console.log('Black');
//     }
// }
// checkChess('a1')

// Task 12

// Task 13
// let arr = ['Baydon', 'Abama', 'Canady', 'Washington', 'Trump', 'Grinch', 'Makedonskiy', 'Putin', 'David', 'Ali', 'Baydon', 'Abama', 'Canady', 'Washington', 'Trump', 'Grinch', 'Makedonskiy', 'Putin', 'David', 'Ali']
// for (let i = 0; i < 10; i++) {
//     console.log(arr[i]);
// }

// Task 14
// let b = [0, 1, 2, 3, 4, 5, 6]
// b.forEach(elem => {
//     console.log(elem ** 2);
// })

// Task 15
// function guessWinner() {
//     let Belgia = []
//     let counterBelgia = 0
//     let French = []
//     let counterFrench = 0
//     for (let i = 0; i < 5; i++) {
//         let randomX = Math.round(Math.random() * 20)
//         Belgia.push(randomX)
//     }
//     for (let i = 0; i < 5; i++) {
//         let randomY = Math.round(Math.random() * 20)
//         French.push(randomY)
//     }

//     Belgia.forEach(playerX => {
//         if (playerX % 2 !== 0) {
//             counterBelgia++
//         }
//     })

//     French.forEach(playerY => {
//         if (playerY % 2 !== 0) {
//             counterFrench++
//         }
//     })
//     if (counterBelgia > counterFrench) {
//         return `Winner Belgia\nGols - ${counterBelgia}`
//     } else {
//         return `Winner Fransia\nGols - ${counterFrench}`
//     }
// }
// console.log(guessWinner());