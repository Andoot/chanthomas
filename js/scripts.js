    $(function() {
        
        $("#buttonlink").hover(function(){
          $("#book").hide();
          $("#contact").hide();
          $(".headers").hide();
          $("#button").fadeIn("fast");
          $("#button").attr("src", "buttoncrop.gif")
      },
      function(){
          $('#button').fadeOut('fast');
          $('#button').attr("src", "buttoncrop.png");
      });
      $("#booklink").hover(function(){
        $("#button").hide();
        $("#contact").hide();
        $(".headers").hide();
        $('#book').fadeIn("fast");
        $('#book').attr("src", "bookcrop.gif")
    },
    function(){
        $('#book').fadeOut("fast");
        $('#book').attr("src", "bookcrop.png")
    });
    $("#contactlink").hover(function(){
      $("#book").hide();
      $("#button").hide();
      $(".headers").hide();
      $('#contact').fadeIn("fast");
      $('#contact').attr("src", "contactcrop.gif")
  },
  function(){
      $('#contact').fadeOut("fast");
      $('#contact').attr("src", "contactcrop.png")
  });
  $("#navbar").mouseleave(function () {
      $(".headers").fadeIn("slow")
  })
 /* function IsMouseOver(oi)
{
   return $(oi).is(':hover');
}*/
    })
    ;
