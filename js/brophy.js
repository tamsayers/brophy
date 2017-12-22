$(function() {
  $(".nav-link, .index__link").click(function(event) {
    var view = $(event.target).attr("href").substring(1);

    $('.nav-item').removeClass('active');
    $(event.target).parent().addClass("active");
    $(".content" ).children().hide();
    $(".content__" + view).show();
  });
});
