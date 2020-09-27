$(document).ready(() => {
    /**
     * SLICK
     */
    $('.products__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev">' +
            '<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.183058 0.188289C0.427136 -0.0627628 0.822864 -0.0627628 1.06694 0.188289L4.81694 4.04543C5.06102 4.29648 5.06102 4.70352 4.81694 4.95457L1.06694 8.81171C0.822864 9.06276 0.427136 9.06276 0.183058 8.81171C-0.0610194 8.56066 -0.0610194 8.15363 0.183058 7.90257L3.49112 4.5L0.183058 1.09743C-0.0610194 0.846375 -0.0610194 0.43934 0.183058 0.188289Z" fill="white"/></svg>' +
            '</button>',
        nextArrow: '<button type="button" class="slick-next">' +
            '<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.183058 0.188289C0.427136 -0.0627628 0.822864 -0.0627628 1.06694 0.188289L4.81694 4.04543C5.06102 4.29648 5.06102 4.70352 4.81694 4.95457L1.06694 8.81171C0.822864 9.06276 0.427136 9.06276 0.183058 8.81171C-0.0610194 8.56066 -0.0610194 8.15363 0.183058 7.90257L3.49112 4.5L0.183058 1.09743C-0.0610194 0.846375 -0.0610194 0.43934 0.183058 0.188289Z" fill="white"/></svg>' +
            '</button>',
        slidesToShow: 2,
        autoplay: true,
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings: {
        //             arrows: false
        //         }
        //     }
        // ]
    });
});