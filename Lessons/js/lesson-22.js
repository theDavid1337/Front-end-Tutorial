// lesson 6

// localStorage , sessionStorage
// let storage = localStorage // yoki sessionStorage
// storage.getItem() // kalit bo'yicha elementni olish
// storage.setItem() // kalit va qiymat orqali element yozish
// storage.removeItem() // kalit orqali elementni ochirish
// storage.clear() // xotirani butunlay tozalash

// function addProduct(productList, name, imageUrl, price) {
//     productList.push({
//         name: name,
//         image: imageUrl,
//         price: price,
//     });
//     return productList;
// }

// fetch("./js/db.json")
//     .then(res => res.json())
//     .then(data => {
//         addProduct(data.products, 'Kalach', './img/image.png', 5.3, 1)
//         console.log(data);
//         localStorage.setItem('products', data.products)
//     })



// JSON.stringify(js object) >>> js obyektlarni JSON qilib beradi
// JSON.parse(JSON) >>> jsonni js obyekt qilib beradi


// localStorage.setItem('product', JSON.stringify({
//     qty: 2,
//     price: 105
// }))

// console.log(localStorage.getItem('product'));
// console.log(JSON.parse(localStorage.getItem('product')));



// let pr = JSON.stringify({
//     qty: 2,
//     price: 105
// })

// for(let key in pr) {
//     console.log(key);
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(array.sort((a, b) => a - b));

// console.log(true);
// console.log('' ? 'true' : 'false');


// const apple = 'apple';
// apple = '' // TypeError

// console.log(true - 1 + 10 < 5);

