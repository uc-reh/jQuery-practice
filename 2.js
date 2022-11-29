$(document).ready(function () {
  //The code goes here
  $(".click").click(function () {
    console.log("This is fired on click event");
  });

  $(".dblclick").dblclick(function () {
    console.log("This will fire after double click event");
  });

  $(".mouseenter").mouseenter(function () {
    console.log("This will fire after Mouse enter event");
  });

  $(".mouseleave").mouseenter(function () {
    console.log("This will fire after Mouse leave event");
  });

  $(".mousedown").mousedown(function () {
    console.log("This will fire after Mouse down event");
  });

  $(".mouseup").mouseup(function () {
    console.log("This will fire after Mouse up event");
  });

  $(".hover").hover(function () {
    console.log("This will fire after .hover event");
  });

  $(".focus").focus(function () {
    $(this).css("background-color", "yellow");
  });

  $(".blur").blur(function () {
    $(this).css("background-color", "yellow");
  });

  $(".keydown").keydown(function () {
    $(this).css("background-color", "yellow");
  });

  $(".keyup").keyup(function () {
    $(this).css("background-color", "pink");
  });
    i = 0;
     $(".keypress").keypress(function () {
         $('.count').text(i+=1);
     });
    j = 0;
    $(document).scroll(function () {
      $(".sc_count").text((j += 1));
    });

    k = 0;
    $(window).resize(function () {
      $(".rs_count").text((k += 1));
    });
});
