$(document).ready(function () {
    $('.featured').owlCarousel({
        margin: 21,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
})

$(document).ready(function () {
    $('.main-univ-events__info').owlCarousel({
        margin: 47,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 2
            }
        }
    })
})

$(document).ready(function () {
    $('.main-countries__item').owlCarousel({
        margin: 46,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
})

$(document).ready(function () {
    $('.main-testimonials__info').owlCarousel({
        stagePadding: 164,
        margin: 61,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            600: {
                items: 2,
                stagePadding: 50
            },
            1000: {
                items: 2
            }
        }
    })
})

const mq = window.matchMedia('(max-width: 700px)');


