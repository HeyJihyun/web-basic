$(function () {
  $("button").click(function () {
    const name = prompt("이름을 입력하세요.");
    const content = prompt("기사제목을 입력하세요.");
    $("section").append("<div><b>" + name + "</b>" + content + "</div>");
  });
});
