// Function
// function plus(numberOne, numberTwo) {
//     return numberOne + numberTwo
// }
// console.log(plus(2, 5));
// console.log(plus(5, 1));
// function functionName(a, b, c) {
//     return a + b + c
// }
// console.log(functionName(2, 3, 4));
// Declaration, Arrow, Anonym, Callback


// function powerA3(a, b, c) {
//     return `${a ** 3}\n${b ** 3}\n${c ** 3}`
// }
// console.log(powerA3(2, 3, 4));

// let helper_a = ``
// let helper_b = ``
// let helper_c = ``

// function powerA3(a, b, c) {
//     for (let i = 2; i <= 4; i++) {
//         helper_a += `${a ** i}\n`
//         helper_b += `${b ** i}\n`
//         helper_c += `${c ** i}\n`
//     }
//     console.log('A');
//     console.log(helper_a);
//     console.log('B');
//     console.log(helper_b);
//     console.log('C');
//     console.log(helper_c);
// }
// powerA3(2, 3, 4)

// function mean(a, b, c, d) {
//     return `(A,B) ${(a + b) / 2}\n(A,C) ${(a + c)/ 2}\n(A,D) ${(a + d)/ 2} \n\n\n(A,B) ${(a + b) * 2}\n(A,C) ${(a + c)* 2}\n(A,D) ${(a + d)* 2}`
// }
// console.log(mean(2, 3, 4, 5));


// function triangle(x, y) {
//     // return x + y
//     return `S = ${x * y}\nP = ${2 * (x + y)}`
//     // ES6
// }
// console.log(triangle(2, 3));
// console.log(triangle(+prompt(), +prompt()));



// Task 6

// let helper_a = 0
// let helper_b = 0
// let helper_c = 0
// let all = 0

// function digitCountSum(a, b, c) {
//     for (let i = 0; i <= a; i++) {
//         helper_a += i
//     }
//     for (let i = 0; i <= b; i++) {
//         helper_b += i
//     }
//     for (let i = 0; i <= c; i++) {
//         helper_c += i
//     }
//     console.log(`A ${helper_a}`);
//     console.log(`B ${helper_b}`);
//     console.log(`C ${helper_c}`);
//     console.log(`All ${helper_a + helper_b + helper_c}`);
// }
// digitCountSum(4, 5, 6)



// Task 7

// let arr = []
// let str = ''

// function invertDigit(a, b, c) {
//     arr.push(a)
//     arr.push(b)
//     arr.push(c)
//     arr.forEach(elem => {
//         str += ` ${elem}`
//     })
//     console.log(arr.reverse());
//     console.log(str);
// }
// invertDigit(+prompt(), +prompt(), +prompt())



// Task 8
let helper_str = ``

function addRightDigit(x, y) {
    helper_str = `${x}${y}`
    console.log(helper_str);
}
addRightDigit(2, 1)