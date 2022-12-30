// function randomWords(text) {
//     let result = ''
//     let randomNum;
//     let randomWords = [' va ', ' ga ', ' uchun ', ' qoshib ', ' yeb ', ' urib ']
//     for (let i = 0; i < randomWords.length; i++) {
//         randomNum = Math.round(Math.random() * 6)
//     }
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == ' ') {
//             result += randomWords[randomNum]
//         } else {
//             result += text[i]
//         }
//     }
//     console.log(result);
// }
// randomWords('noutbuk kompyuter pc')


// function randomElem(x, y) {
//     let result = []
//     let xArr = []
//     let yArr = []
//     if (x > 11) {
//         for (let i = 1; i <= 11; i++) {
//             let randomX = Math.round(Math.random() * 100)
//             xArr.push(randomX)
//         }
//     } else {
//         for (let i = 1; i <= x; i++) {
//             let randomX = Math.round(Math.random() * 100)
//             xArr.push(randomX)
//         }
//     }
//     if (y > 11) {
//         for (let i = 1; i <= 11; i++) {
//             let randomY = Math.round(Math.random() * 100)
//             yArr.push(randomY)
//         }
//     } else {
//         for (let i = 1; i <= y; i++) {
//             let randomY = Math.round(Math.random() * 100)
//             yArr.push(randomY)
//         }
//     }
//     // result.push('a:')
//     // xArr.forEach(elem => {
//     //     result.push(elem)
//     // })
//     // result.push('b:')
//     // yArr.forEach(elem => {
//     //     result.push(elem)
//     // })
//     result.push(xArr)
//     result.push(yArr)
//     return result
// }
// console.log(randomElem(5, 11));