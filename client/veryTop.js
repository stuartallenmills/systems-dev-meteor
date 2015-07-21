

Template.veryTop.rendered = function () {
 var startDel=0;
 var delStep=800;
     var delay=1000;
     var hi = $(window).height();
     var tc = this.$(".endTop");
     var bus = this.$( "#bus");
     var bet = this.$( "#bet");
     var off = tc.offset();
     var blk= tc.offset().top;
     if (hi<blk) {
      $('body, html').animate({scrollTop: blk-hi }, delay);
      
//     if ($( window ).height() < 500) {
//         scrolear( "#active" );
      }
     this.$( "#bus" ).delay(startDel).show("fade");
    startDel=startDel+delStep;
   this.$( "#bet" ).delay(startDel).show("slide", {direction:"right"}, 800);
    startDel=startDel+delStep;
   this.$( "#str" ).delay(startDel).show("slide", {direction:"right"}, 800);
    startDel=startDel+delStep;
   this.$( "#fas" ).delay(startDel).show("slide", {direction:"right"}, 800);
    startDel=startDel+delStep;
    this.$( "#bus" ).delay(startDel).show("fade");
    startDel=startDel+delStep;
    this.$( "#wehave").delay(startDel).show("fade");
//    $( "#sysmod" ).delay(startDel+delStep).show("slide", {direction:"up"});
//    $( "#ec" ).delay(startDel+2*delStep).show("slide", {direction:"up"});
//    $( "#weHelp" ).delay(startDel+3*delStep).show("slide", {direction:"up"});
//    $( "#req" ).delay(startDel+4*delStep).show("fade");
}
