

function scrolear(destino){
    var stop = $(destino).offset().top;
    var delay = 1000;
    $('body, html').animate({scrollTop: stop}, delay);
    return false;
}
  


$( function() {
  $( "#webticker" ).show();
  $( "#webticker" ).webTicker({speed: 30, startEmpty: false});
   });


