$(document).ready(function(){

    $('.superslider').slick({
    infinite: true,
    slidesToShow: 5.04,
    slidesToScroll: 5.0,
    arrows: true,
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



/*--------------Filter slæderar------------------*/
var circles = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",];
$(function(){
$("#circles-sliderRating")
   
   .slider({
       min: 1,
       max: 10,
       values: [8, 9],
       range: true,
       step: 1
   })
    .slider("pips")
    .slider("float", {
        label: circles
    });
    


$(".filter1")          
   .slider({
       min: 0,
       max: 10,
       values: [8, 9],
       range: true,
       step: 1
   })
   .slider("pips", {
      rest: "false",
      label: circles
    })
                                      
});

$(function(){
$("#circles-sliderYear")
   
   .slider({
       min: 1888,
       max: 2017,
       values: [1997, 2017],
       range: true,
       step: 5
   })
    .slider("pips");


$(".filter2")          
   .slider({
       min: 1888,
       max: 2017,
   })
                           
   .slider("pips", {
       rest: "label",
       step: 20
   }) 
});



/*----------------Genre slider í mobile-------------*/


