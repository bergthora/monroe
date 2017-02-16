
$(function(){
$("#circles-slider")
   
   .slider({
       min: 0,
       max: 10,
       values: [8, 10],
       range: true,
       step: .5
   })
    .slider("pips");


$(".slider")          
   .slider({
       min: 0,
       max: 10,
   })
                           
   .slider("pips", {
       rest: "label",
       step: 1
   })
                           
   
});

 