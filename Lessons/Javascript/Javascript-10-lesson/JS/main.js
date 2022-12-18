// // slice - bu indexlar orqali korsatilgan qatorni nusxalaydi
// let str = 'stringtify'
// // console.log(str.slice(0, 5)); // strin
// // console.log(str.slice(3, 5)); // in
// // slice(start, stop)


// // let arr = [1, 'string', true, [1, 2, 3], {
// //     name: 'John',
// //     age: 23
// // }]

// // console.log(arr[0]); // 1
// // console.log(arr[1]); // string
// // console.log(arr[2]); // true
// // console.log(arr[3]); // [1, 2, 3]
// // console.log(arr[arr.length - 1]); // { name: 'John', age: 23}
// // console.log(arr.length); // 5


// // let arr = [1, 2, 3, 4, 5];
// // arr.push(6) // [1, 2, 3, 4, 5, 6]
// // arr.pop() // [1, 2, 3, 4]
// // arr.shift() // [2, 3, 4, 5]
// // arr.unshift(6) // [6, 1, 2, 3, 4, 5]
// // console.log(arr);
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i] * 2);
// // }


// // unshift() - Massiv ni boshiga kirgizish uchun
// // shift() - Massiv boshidan ochirish

// // pop() - Massiv ni oxiridan element ni chiqarib olish
// // push() - Massivni oxiridan qoshish

// let a = []
// for (let i = 0; i < 200; i++) {
//     let randomNum = Math.round(Math.random() * 300)
//     a.push(randomNum)
// }
// let b = []
// a.forEach(elem => {
//     if (elem < 100) {
//         b.push(elem)
//     }
// })
// console.log(b.sort((a, b) => a - b));




// // function findSameElem() {
// //     let a = []
// //     let b = []
// //     let c = []
// //     for (let i = 0; i < 10; i++) {
// //         let randomNum = Math.round(Math.random() * 300)
// //         a.push(randomNum)
// //     }
// //     for (let i = 0; i < 10; i++) {
// //         let randomNum = Math.round(Math.random() * 300)
// //         b.push(randomNum)
// //     }
// //     a.forEach(firstArrayElem => {
// //         b.forEach(secondArrayElem => {
// //             if (firstArrayElem == secondArrayElem) {
// //                 c.push(firstArrayElem)
// //             }
// //         })
// //     })
// //     console.log(a);
// //     console.log(b);
// //     console.log(c.sort((a, b) => a - b));
// // }

// // findSameElem()


// // let n = +prompt()
// // let arr = []
// // for (let i = 0; i <= n; i++) {
// //     if (i % 2 == 1) {
// //         arr.push(i)
// //     }
// // }
// // console.log(arr);



// // let n = +prompt()
// // let arr = []
// // for (let i = 0; i <= n; i++) {
// //     arr.push(2 ** i)
// // }
// // console.log(arr);

// let arr = []
// let newArr = []
// for (let i = 0; i < 50; i++) {
//     let randomNum = Math.round(Math.random() * 300)
//     arr.push(randomNum)
// }
// let helper_x = []
// let helper_y = []
// // console.log(arr.reverse());


// // let helper_x = 0
// // arr.forEach(elem => {
// //     if (elem % 2 == 1) {
// //         helper_x++
// //         newArr.push(elem)
// //     }
// // })
// // console.log(`${helper_x} - toq son, ulardan ${newArr.sort((a, b) => a - b)}`);



// arr.forEach(elem => {
//     if (elem % 2 == 0) {
//         helper_x.sort((a, b) => a - b).push(elem)
//     } else {
//         helper_y.sort((a, b) => b - a).push(elem)
//     }
// })
// helper_x.forEach(elem => {
//     newArr.push(elem)
// })

// helper_y.forEach(elem => {
//     newArr.push(elem)
// })

// console.log(newArr);