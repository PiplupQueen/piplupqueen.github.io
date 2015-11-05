$(document).ready(function() {

  $("#start").click(function() {
    $("#start").hide();
    $("#memegame").css("background-image", "url('http://piplupqueen.github.io/borderlands.jpg')");
    $("#shrek").hide();
    $("#clickme").hide();
    $("#fire").hide();
    $(".doge").show();
    $(".crate").show();
  });

  $(".crate").click(function() {
    $(".crate").hide();

});

 });