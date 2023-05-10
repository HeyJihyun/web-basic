$(function () {
  $("li").click(function () {
    $("li").removeClass("select");
    $(this).addClass("select");
  });
});
