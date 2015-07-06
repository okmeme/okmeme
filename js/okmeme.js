
$( document ).ready(function() {
      $(".commentsection").hide();
  $(".commentlink").click(function() {
    $(this).next(".commentsection").slideToggle(200);
  });
});
