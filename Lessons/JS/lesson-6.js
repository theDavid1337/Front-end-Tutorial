// let i = 0
// while (i < 10) {
//     i++
//     console.log(i);
// }

// let control = true
// while (control) {
//     let pass = prompt()
//     if (pass == '1234') {
//         control = false
//         alert('Wellcome')
//     }
// }


// Task 1
// let control = true
// while(control){
//     let number = +prompt()
//     if(number % 3 == 0){
//         control = false
//         console.log(`This is number You Expected ${number}`);
//     }
// }


// Task 2
// let control = true
// let peace = 0
// let pie = 0
// let apple = 0
// while (control) {
//     let fruit = prompt('Meva kiriting').toLowerCase()
//     if (fruit == 'anor') {
//         peace++
//         if (peace >= 3) {
//             control = false
//         }
//     } else if (fruit == 'behi') {
//         pie++
//         if (pie >= 3) {
//             control = false
//         }
//     } else if (fruit == 'olma') {
//         apple++
//         if (apple >= 3) {
//             control = false
//         }
//     }
// }
// console.log(`Anor - ${peace}`);
// console.log(`Behi - ${pie}`);
// console.log(`Olma - ${apple}`);




// while(shart){ harakat}
// do(harakat) while(shart)
// for(sanoq boshi; shart; qadam) { harakat }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// for (let i = 0; i < 5; i++) {
//     let p = +prompt()
//     console.log(p);
// }


// Task 1
// let n = +prompt('n')
// let k = +prompt('k')
// for (let i = 0; i < n; i++) {
//     console.log(k);
// }


// Task 2
// let a = +prompt('a')
// let b = +prompt('b')
// for (let i = b - 1; i > a; i--) {
//     console.log(i);
// }


// Task 4
// let choco = +prompt()
// for (let i = 1; i <= 10; i++) {
//     console.log(`Choco ${choco * i}`);
// }


// Task 5
// let choco = +prompt()
// for (let i = 1; i <= 10; i++) {
//     console.log(`Choco ${choco * (i / 100)}`);
// }


// Task 6
// let choco = +prompt()
// for (let i = 1; i <= 2; i += 0.2) {
//     console.log(`Choco ${choco * i}`);
// }


// Task 7
// let a = +prompt('a')
// let b = +prompt('b')
// let all = 0
// for (let i = a; i < b; i--) {
//     all += i
// }
// console.log(all);

let number = prompt()
let helper_s = ``
for (let i = 1; i < number.length + 1; i++) {
    helper_s += `${number[i - 1]}`
    console.log(helper_s);
}