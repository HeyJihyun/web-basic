$(function () {
  $("#start").click(function () {
    let text = null;
    while (text === null || text.length === 0) {
      text = prompt("텍스트를 입력해주세요");
    }
    $("#start").css("display", "none");
    $(".text").html(text);
    $(".buttonBox").css("display", "block");
  });

  $(".buttonBox>button").click(function () {
    const color = $(this).text();
    $(".text").css("color", color);
  });
});
