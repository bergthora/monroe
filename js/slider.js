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

  



$(function() {
    
    $("#pips-slider")
    
        .slider({
        
            range: true,
            min: 0,
            max: 10,
            values: [ 4, 16 ],
        	step: 1
        
        })
    
        .slider("pips", {
        	
        	first: "label",
        	last: "label",
            rest: "label",
        	step: 1,
        	labels: false,
        	prefix: "",
        	suffix: ""
        
        })
    
    	.slider("float", {
        	
        	handle: true,
        	pips: false,
        	labels: false,
        	prefix: "",
        	suffix: ""
        
    	});


});