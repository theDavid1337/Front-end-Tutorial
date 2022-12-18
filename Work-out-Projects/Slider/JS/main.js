// // slides = document.getElementsByClassName("slide");
// // containerWidth = 500;

// // Array.prototype.forEach.call(slides, function (el, i) { //set the initial position of each slide
// //     el.style.left = (i * containerWidth) + "px";
// // });

// // window.moveSlides = function (direction) {
// //     run = true;
// //     tracker = containerWidth; //500 in this example. We make a separate variable so we can decrement it

// //     if (((direction == "next" && (parseInt(slides[0].style.left) <= (0 - (containerWidth * (slides.length - 1)))))) //compare against 2nd-to-last slide's index, otherwise it'll go 1 slide too far
// //         ||
// //         (direction == "prev" && (parseInt(slides[0].style.left) >= 0))) {
// //         run = false;
// //     }

// //     if (run) {
// //         var slideInterval = setInterval(function () {
// //             moveRate = 4; //set the speed here (use numbers that the container's width can be divided by without a remainder)
// //             Array.prototype.forEach.call(slides, function (el, i) {
// //                 if (tracker <= 0) {
// //                     clearInterval(slideInterval)
// //                 } else {
// //                     el.style.left = (direction == "next") ? (parseInt(el.style.left) - moveRate) + "px" : (parseInt(el.style.left) + moveRate) + "px";
// //                 }
// //             });
// //             tracker -= moveRate;
// //         }, 1);
// //     }
// // }

// var currentSlide = 0;
// var slides = document.querySelectorAll("#slides .slide");
// var controls = document.querySelectorAll(".controls");
// var next = document.getElementById("next");
// var previous = document.getElementById("previous");

// for (var i = 0; i < controls.length; i++) {
//     controls[i].style.display = "inline-block";
// }

// function goToSlide(n) {
//     slides[currentSlide].className = "slide";
//     currentSlide = (n + slides.length) % slides.length;
//     slides[currentSlide].className = "slide showing";
// }

// function nextSlide() {
//     goToSlide(currentSlide + 1);
// }

// function previousSlide() {
//     goToSlide(currentSlide - 1);
// }

// next.onclick = function () {
//     nextSlide();
// };
// previous.onclick = function () {
//     previousSlide();
// };