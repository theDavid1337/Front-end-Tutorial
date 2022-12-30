const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 1500,
    },
    slidesPerView: 4,
    spaceBetween: 10,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1: {
            slidesPerView: 1
        },
        280: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 4
        }
    },
    grab: true,
});