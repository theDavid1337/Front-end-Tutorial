// let helper_x = "qwertyuiop[]{};:/,.<>!@#$%^&*()-_=+*"
// let helper_y = ""
// for (let letter of helper_x) {

// }
// console.log(helper_y);



// Filter & Map

// function getUp(num) {
//     if (num >= 10) {
//         return num
//     }
// }

// array.filter(arrow function)

// let arr = [1, 2, 3, 4, 5, 6, 1241241, 7, 2, 1, 41, 24, 1, 24, 12, 41, 24, 12, 4]
// filtered = arr.filter(item => item >= 10)
// console.log(filtered);

// let users = [{
//         id: 1,
//         name: 'David'
//     },
//     {
//         id: 2,
//         name: 'Samuel'
//     },
//     {
//         id: 3,
//         name: 'Ali'
//     }
// ];

// console.log(users.filter(elem => elem.id == 1));


// let obj = [1, 2, 3]

// // function (item, index) {
// //     console.log(`item = ${item}`);
// //     console.log(`index = ${index}`);
// // }

// obj.filter(
//     function (item, index, arr) {
//         console.log(`item = ${item}`);
//         console.log(`index = ${index}`);
//         console.log(`array = ${arr}`);
//     });




// Task 1



// let arr = ['Olma'.toLowerCase(), 'Behi'.toLowerCase(), 'Nok'.toLowerCase(), 'Uzum'.toLowerCase(), 'Anor'.toLowerCase()]
// let filtered = arr.filter(elem => elem.includes('a') || elem.includes('b'))
// console.log(filtered);


// let arr = ['Hello', 'World']
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].toLowerCase()
//     console.log(arr[i]);
// }



// let arr = ['HelloWorld', 'World'].map(item => item.length);
// console.log(arr);


// let arr2 = ['HelloWorld', 'World'].filter(item => item.length);
// console.log(arr2);



// let arr = [1, 2, 3, 4, 5].map(num => num ** 2)
// console.log(arr);



// let arr = [2, 5, 3, 1, 4, 7, 6, 9, 8, 0, 11]
// let sorted_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(arr.sort((a, b) => a - b));

// function filterRange(arr, start, stop) {
//     let result = []
//     for (let num of arr) {
//         if (num >= start && num <= stop) {
//             result.push(num)
//         }
//     }
//     return result;
// }
// console.log(filterRange(arr, 2, 6));


// function filterRange(arr, b, a) {
//     return arr.filter(item => (a <= item && item <= b))
// }
// console.log(filterRange(arr, 2, 6));



// let vasya = {
//     name: 'Вася',
//     age: 25
// }

// let petya = {
//     name: 'Петя',
//     age: 25
// }

// let masha = {
//     name: 'Маша',
//     age: 25
// }

// let helper_arr = []
// let users = [vasya, petya, masha]
// users.forEach(elem => {
//     helper_arr.push(elem.age)
// })

// console.log(helper_arr);


// let user = [vasya, petya, masha].sort((a, b) => a.age - b.age)
// console.log(user);



// let helper = []
// let strings = ['кришна', 'кришна', 'кришна', 'кришна', 'харе']
// strings.forEach(elem => {
//     for (let i = 0; i < strings.length; i++) {
//         if (elem !== strings[i]) {
//             helper.push(elem)
//         } else {

//         }
//     }
// })
// console.log(helper);







