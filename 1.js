$(document).ready(function () {
  //For 1.html
  $("p:first").click(function () {
    console.log("p tag is clicked");
  });

  $("#p_id").hover(function () {
    console.log("I hovered using ID");
  });
  $(".p_class").click(function () {
    console.log("I clicked using class(click)");
  });
  $("[href]").click(function () {
    console.log("I clicked href attribute(click)");
  });
  $("a[target='_blank']").hover(function () {
    console.log("With target blank");
  });
});
