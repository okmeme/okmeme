$(document).ready(function() {
  $.embedly.defaults.key = '31ff5a4877c74183ad6c22e84de3d359';

  $(".commentsection").hide();
  $(".commentlink").click(function() {
    $(this).parent().parent().parent().next('.commentsection').slideToggle(200);
  });

  $(document).on('click', '.expand', function(e) {
    $(this).removeClass("expand").addClass("contract");

    var domelem = $(this).parent().next('.link');
    var cuck = domelem.clone(true).empty().embedly().insertAfter(domelem);
  });

  $(document).on('click', '.contract', function(e) {
    $(this).removeClass("contract").addClass("expand");
    var domelem = $(this).parent().next().next().remove();
  });

});
