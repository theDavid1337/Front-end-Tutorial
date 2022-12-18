// Objects >>> Array


// 1 - attribute - sifat
// 2 - method - harakat , usul


// let person = {
//     name: 'Fred',
//     age: 23,
//     country: 'Uzbekistan',
//     weight: 78.5,
//     height: 179.3,
//     talk() {
//         console.log('Lets talk...');
//     },
//     walk: function () {
//         console.log('Walk...');
//     }
// }
// console.log("name" in person);

// Objectni barcha qiymatlarini olish

// for (let key in person) {
//     console.log(person[key]);
// }

// console.log(person.name); // Fred

// console.log(person.age); // 23

// console.log(person['country']); // Uzbekistan

// Task 1

// Futbolchi obyektini hosil kiling kamida 8 ta sifati va 4 ta metodi bolsin

// let playerFoot = {
//     name: 'David',
//     age: 17,
//     weight: 65,
//     height: 187,
//     country: 'Andijan',
//     salary: 1000,
//     married: true,
//     position: 'Defend',
//     jump() {
//         console.log('High Jump');
//     },
//     run() {
//         console.log('Speed Run');
//     },
//     howManyGoals() {
//         console.log('4 Goals in first time');
//     },
//     anotherAbility() {
//         console.log('can understand each others');
//     }
// }

// for (let key in playerFoot) {
//     console.log(playerFoot[key]);
// }

// let car = {
//     marka: 'Supra mk4',
//     price: '20000$',
//     year: 2010,
//     color: 'black',
//     country: 'Japan',
//     razgon() {
//         console.log('Highest razgon');
//     },
//     speedPower() {
//         console.log('280km/h');
//     }
// }


// let arr = [1, 2, 3, 4]
// console.log(arr.reverse());

// let arr = [1, 2, 3, 4]
// let str = ``
// arr.forEach(elem => {
//     str += elem
// })
// console.log(str);


// function checkInts(a, b, c) {
//     if (a < b && a < c && b < c) {
//         console.log(a + b + c);
//     } else {
//         console.log((a + b + c) / 3);
//     }
// }
// checkInts(3, 2, 4)


let i = 0
let control = true
while (control) {
    console.log(arr[i]);
    i++
    if (i == 9) {
        control = false
    }
}

