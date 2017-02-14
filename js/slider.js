$(document).ready(function(){
    $('.superslider').slick({
    infinite: true,
    slidesToShow: 5.04,
    slidesToScroll: 5.0,
    arrows: true
    responsive: [
    {
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
});

  

$('#my-slider').show();
$('#my-slider').foundation('_reflow');