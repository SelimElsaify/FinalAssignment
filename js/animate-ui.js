// animate JS 
$(document).ready(function(){
// $('h2').addClass('alternative'); 
  $('h2').next().toggle(); 
 
//$('h2').css('color', 'rgb(191, 0, 255');
    
   $('h2').on('click mouseover', function(e){
     $(this).next().toggle();    
      console.log("stap 0");  
             
   }); // end click 
     // $('div :last-of-type').off('click'); 
    console.log("stap 1");  
}); // end document ready 