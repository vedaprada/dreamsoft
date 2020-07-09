$(window).on("scroll", function() {
  if($(window).scrollTop()) {
    $("nav").addClass("black");
  }
  else {
    $("nav").removeClass("black");
  }
});

$(".link2").click(function() {
  $(".p1").hide();
  $(".hidden1").addClass("not-hidden1");
});

$(".link3").click(function() {
  $(".p2").hide();
  $(".p1").hide();
  $(".hidden2").addClass("not-hidden2");
});

$(".link4").click(function() {
  $(".p3").hide();
  $(".p2").hide();
  $(".p1").hide();
  $(".hidden3").addClass("not-hidden3");
});
