// let a = 10
// console.log(a);

// let url = 'https://jsonplaceholder.typicode.com/users/'
// let data = fetch(url)
// console.log(data);


// let responseObj = 
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     }).catch()

// window.XMLHttpRequest()
// request = Client sorovi
// response = Brauzerni javobi

// fetch(url).then(
//     result => console.log(result),
// ).catch(error => console.log(error))

// fetch(url)
//     .then(result => console.log(result)) // Response obyekti mavjud va http status : 200
//     .catch(error => console.log(error)) // Response obyekti mavjud va http status : 404 yoki boshka xatolar
//     .finally(final => console.log('The end !')) // Har qanday xolatda ishlaveradi

// client
// server
// superuser

// http



// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//         'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//     }
// };


// function searchMovie() {
//     let query = document.querySelector('input')
//     if (query) {
//         let url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`
//         fetch(url, options)
//             .then(response => response.json())
//             .then(response => {

//             })
//             .catch(err => console.error(err));
//     } else {
//         alert('pls write smth')
//     }
// }

window.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        searchMovie()
    }
})