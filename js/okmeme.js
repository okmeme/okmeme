$(document).ready(function() {
  $(".commentsection").hide();
  $(".commentlink").click(function() {
    $(this).parent().parent().parent().next('.commentsection').slideToggle(200);
  });
});

