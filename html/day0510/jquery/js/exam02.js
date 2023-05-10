$(function () {
  $("button").click(function () {
    const name = prompt("이름을 입력하세요.");
    const content = prompt("기사제목을 입력하세요.");
    insertNew(name, content);
  });

  $("#submit").click(function () {
    const name = $("#name").val();
    const content = $("#content").val();
    insertNew(name, content);
  });
});

function insertNew(name, content) {
  if (
    name !== null &&
    content !== null &&
    name.length !== 0 &&
    content.length !== 0
  ) {
    $("section").append(`<div><b>${name}</b>${content}</div>`);
  }
}
