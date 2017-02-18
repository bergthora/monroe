$(document).ready(function() {
    
    $('.superslider').slick({
        infinite: true,
        slidesToShow: 5.04,
        slidesToScroll: 5.0,
        arrows: true,
        responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    
    // $("#circles-slider")
    //     .slider({
    //         min: 0,
    //         max: 10,
    //         values: [8, 10],
    //         range: true,
    //         step: .5
    //     })
    //     .slider("pips");
    //     $(".slider").slider({
    //         min: 0,
    //         max: 10,
    //     })
    //     .slider("pips", {
    //         rest: "label",
    //         step: 1
    //     })
    
});