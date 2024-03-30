$(document).ready(function () {

    $('.homeSlider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 17,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    $('.favouritesSlider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 17,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            },
            1300: {
                items: 5
            },
        }
    })

    $('.vouchersSlider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1500,
        autoplayHoverPause: true,
        margin: 17,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            },
            1300: {
                items: 5
            },
        }
    })



    $('.homeSlider.owl-carousel .owl-nav button.owl-prev').html('').html('<i class="fa-solid fa-chevron-left"></i>')
    $('.homeSlider.owl-carousel .owl-nav button.owl-next').html('').html('<i class="fa-solid fa-chevron-right"></i>')

    $('.favouritesSlider.owl-carousel .owl-nav button.owl-prev').html('').html('<i class="fa-solid fa-chevron-left"></i>')
    $('.favouritesSlider.owl-carousel .owl-nav button.owl-next').html('').html('<i class="fa-solid fa-chevron-right"></i>')

    $('.vouchersSlider.owl-carousel .owl-nav button.owl-prev').html('').html('<i class="fa-solid fa-chevron-left"></i>')
    $('.vouchersSlider.owl-carousel .owl-nav button.owl-next').html('').html('<i class="fa-solid fa-chevron-right"></i>')


});  // jquery function end
