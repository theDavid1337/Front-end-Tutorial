// let arr = [10, 8, 7, 11, 3, 5]
// let helper_x = []
// let helper_y = []

// // 2 , 7 , 9
// let helper_a = []
// let helper_b = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[arr.length - 1]) {
//         helper_a.push(arr.indexOf(arr[i]))
//         helper_x.push(arr[i])
//     } else {
//         helper_y.push(arr[i])
//         helper_b.push(arr.indexOf(arr[i]))
//     }
// }
// console.log(arr);
// console.log(`${helper_x[0]} --- ${arr[arr.length - 1]} --- ${helper_y[0]}\n${helper_a[0]} --- ${arr.indexOf(arr[arr.length - 1])} --- ${helper_b[0]}`);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = 0
// let k = 2
// let l = 6
// for (let i = k; i <= l; i++) {
//     result += arr[i]
// }
// console.log(result);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = 0
// let helper_x = 0
// let k = 2
// let l = 6
// for (let i = k; i <= l; i++) {
//     helper_x++
//     result += arr[i]
// }
// console.log(`${result / helper_x}`);



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = 0
// let helper_x = 0
// let k = 2
// let l = 6
// console.log(arr.splice(k, l));
// arr.forEach(elem => {
//     helper_x++
//     result += elem
// })
// console.log(arr);
// console.log(result);
// console.log(`${result / helper_x}`);



