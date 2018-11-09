
function allFunctions(){
  function hoverImageChange(){
    $("ul li a").hover(function() {
    $("#pic").removeClass().addClass($(this).attr('rel'));
  }
)}
  function arrows(){
      $("#div2").hide();
      $("#link1").on("click",function(){
          $("#div2").show();
          $("#div1").hide();
      });
      $("#link2").on("click",function(){
          $("#div1").show();
          $("#div2").hide();
      });
  };

  
  hoverImageChange();
  arrows();

}
