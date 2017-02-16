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
    
    $("#pips-slider1")
    
        .slider({
        
            range: true,
            min: 0,
            max: 10,
            values: [ 4, 10 ],
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


$(function() {
    
    $("#pips-slider2")
    
        .slider({
        
            range: true,
            min: 1888,
            max: 2017,
            values: [ 1999, 2017 ],
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