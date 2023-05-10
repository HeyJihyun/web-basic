$(function () {
  $("#start").click(function () {
    // start 버튼 클릭 시 start 함수 실행
    start();
  });

  $(".buttonBox > button").click(function () {
    // 각 색상 버튼 클릭 시 chageColor 함수실행
    chageColor($(this).text());
  });
});

// prompt로 텍스트 입력 받는 함수
function start() {
  let text = null;
  while (text === null || text.length === 0) {
    text = prompt("텍스트를 입력해주세요");
  }
  $("#start").css("display", "none");
  $(".text").html(text);
  $(".buttonBox").css("display", "block");
}

// 설정한 color의 색상으로 변경하는 함수
function chageColor(color) {
  $(".text").css("color", color);
  alert(color + "색으로 변경되었습니다");
}
