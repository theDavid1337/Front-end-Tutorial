// DOM - Document Object Module
// document , window
// document >> html file , js object
// window >> browser window , js object

// console.log("LOG");
// console.error("HELLO");
// console.debug("DEBUG")
// console.log(document);
// console.log(window.location);
// console.log(window.localStorage);

// let ul = document.getElementById('list')
// console.log(ul);
// let ul = document.getElementsByName('main')
// console.log(ul);
// let ul = document.getElementsByClassName()
// let ul = document.getElementsByTagName('li')
// console.log(ul);


// ES6
// let ul = document.querySelector()
// let ul_s = document.querySelectorAll('li')
// console.log(ul_s);


let ul = document.querySelector('#list')
// console.log(ul.childNodes);
// console.log(ul.children);

// console.log(ul.firstChild);
// console.log(ul.lastChild);

// for (let li of ul.children) {
//     console.log(li);
//     console.log(li.textContent);
// }

// let list = document.querySelector('#list-2')
// console.log(list.previousSibling); // #list-1
// console.log(list.nextSibling); // #list-3

// console.log(list.parentElement); // div.container.lists
// console.log(list.parentElement.parentElement); // main
// console.log(list.parentElement.parentElement.parentElement); // body



function checkAnswer(element, text) {
    if (text.toLowerCase() == 'dog') {
        element.style.backgroundColor = 'lightblue'
        console.log('Right');
        for (let elem of element.parentElement.children) {
            if (elem !== element) {
                elem.style.backgroundColor = 'red'
            }
        }
    } else {
        for (let elem of element.parentElement.children) {
            if (elem.textContent.toLowerCase() == 'dog') {
                elem.style.backgroundColor = 'purple'
            } else {
                elem.style.backgroundColor = 'red'
            }
        }
        console.log('Wrong');
    }
}