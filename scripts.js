$(function() {
        
  $("#llink").hover(function(){
    $("#changes").hide();
    $("#master").hide();
    $(".headers").hide();
    $("#levels").fadeIn("fast");
},
function(){
    $('#levels').fadeOut('fast');
});
$("#clink").hover(function(){
  $("#levels").hide();
  $("#master").hide();
  $(".headers").hide();
  $('#changes').fadeIn("fast");
},
function(){
  $('#changes').fadeOut("fast");
});
$("#mlink").hover(function(){
  $("#changes").hide();
  $("#levels").hide();
  $(".headers").hide();
  $('#master').fadeIn("fast");
},
function(){
$('#master').fadeOut("fast");
});
$("#navbar").mouseleave(function () {
$(".headers").fadeIn("slow")
})
/* function IsMouseOver(oi)
{
return $(oi).is(':hover');
}*/
});
