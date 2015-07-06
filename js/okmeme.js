$(document).ready(function() {
  $.embedly.defaults.key = '31ff5a4877c74183ad6c22e84de3d359';

  $(".commentsection").hide();
  $(".commentlink").click(function() {
    $(this).parent().parent().parent().next('.commentsection').slideToggle(200);
  });


  $(".expand").click(function() {
    if ($(this).parent().next(".embed").length) {
      $(this).parent().next('.link').removeClass("hide");
      $(this).parent().next(".embed").remove();
      console.log("show link");
    } else {
      $(this).parent().next('.link').clone(true);
        //.embedly();
      $(this).parent().next('.link').addClass("hide");
      console.log("embedly");
    }
  });
});
