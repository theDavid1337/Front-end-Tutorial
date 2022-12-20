// TASK 3

// for (let i = 1; i < 90; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }


// TASK 4

// let arr = []
// for (let i = 0; i < 3; i++) {
//     let randomNum = Math.round(Math.random() * 100)
//     arr.push(randomNum)
// }
// console.log(arr.sort((a, b) => b - a));


// TASK 5

// let names = ['john', 'defoe', 'karl', 'enrique', 'miguel', 'roberto']
// let myFriends = []
// names.forEach(elem => {
//     if (elem == 'miguel' || elem == 'karl' || elem == 'roberto'){
//         myFriends.push(elem)
//     }
// })

// console.log(myFriends);


// TASK 6

// let control = true
// let i = 7
// while (control) {
//     i--
//     console.log(i);
//     if (i == 0) {
//         control = false
//     }   
// }


// TASK 7

// let str = 'Javascript is funny'
// for (var i = 0; i < str.length; i++) {
//     if (str[i] !== ' ') {
//         console.log(str[i]);
//     }
// }


// TASK 8

// let control = true

// while (control) {
//     let username = prompt('Username')
//     if(username == 'gandi123'){
//         console.log('Welcome');
//         control = false
//     } else {
//         alert('try again...')
//     }
// }


// TASK 9

// for (let i = 1; i <= 40; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// TASK 10

// let arr = []
// for (let i = 0; i <= 10; i++) {
//     let randomNum = Math.round(Math.random() * 10)
//     arr.push(randomNum)
// }
// console.log(arr);


// TASK 11

// for (let i = 0; i <= 10; i++) {
// console.log(i ** 2);
// // OR
// console.log(i * i);
// }


// TASK 12

// let param = prompt("Enter smth..")
// ?????????????????????????????????


// TASK 13

// let user = prompt("Enter smth..")
// let user = 'aaa3a465666a7f5afajhkahfkahfkhhfakh'.toLowerCase()
// let helper_str = ''
// let result = 0


// if (user.startsWith('aaaa')) {
//     for (let i = 0; i < user.length; i++) {
//         if (user[i] == 'a') {
//             helper_str += 'e'
//         } else {
//             helper_str += user[i]
//         }
//     }
//     console.log(helper_str);
// } else {
//     for (let i = 0; i < user.length; i++) {
//         if (user[i] == 'a') {
//             result++
//         }
//     }
//     console.log(`User Entered ${result} - A`);
// }


// TASK 14

// let user = 45
// if (user < 100 && user > 0) {
//     let result = 0
//     let arr = []
//     for (let i = 0; i < 100; i++) {
//         let randomNum = Math.round(Math.random() * 100)
//         arr.push(randomNum)
//     }
//     arr.forEach(elem => {
//         if (user == elem) {
//             result++
//         }
//     })
//     console.log(`${result} - same`);
// } else {
//     console.log(`user is bigger than 100 or smaller than 0`);
// }