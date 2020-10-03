$(document).ready(() => {
    /**
     * SLICK
     */
    if (window.innerWidth <= 640) {
        $('.products__slider').slick({
            infinite: true,
            arrows: false,
            dots: false,
            slidesToShow: 1,
            autoplay: true
        });
    }

    $('.btn_anchor').on('click', (e) => {
        e.preventDefault();
        let id = $(e.target).attr('href');
        let top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
    });
});
