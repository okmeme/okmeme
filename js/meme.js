$(function() {
  var ok = 1;
  console.log("init");

  $("#meme").click(function() {
    console.log("pressed " + ok);
    alert("me too thanks");
    ok++;
    if (ok > 2) {
      $("#meme").text("i don't know what you expected");
    }
    if (ok > 5) {
      $("#meme").text("pls stop");
      $("#meme").addClass("btn-danger");
      $("#meme").removeClass("btn-success");
    }
    if (ok > 10) {
      $("#meme").text("fine");
      $("#meme").addClass("btn-warning");
      $("#meme").removeClass("btn-danger");
    }
    if (ok > 20) {
      alert("go away");
      $("#meme").hide();
    }
  });

});
