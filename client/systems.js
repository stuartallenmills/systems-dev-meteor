  $( "#menuimg" ).click( function () {
    $( "#navdiv" ).toggle("slide", {direction:"up"});
 });

var slides =["logoPuz.Png", "Language.png", "Rtp.png"]

function setAtt (titem) {
   var item=titem;
        $( "#theimg" ).attr("src", "Images/"+slides[item]);
        $( "#theimg" ).show("fade");
 }
   
function slidefunc(titem) {
        var item=titem;
        $( "#theimg").hide("fade", 400, function() {
            setAtt(titem);
           });
       }
             

function slideShow() {
      $.each(slides, function (item) {
         var atime=item*3000;
        window.setTimeout(function () {
                slidefunc(item)}, atime);
      });
  };


//$(function () {
//   slideShow();
//});

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

$(function(){
    // this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $("#navdiv a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("a").addClass("mactive");
        }
    });
});