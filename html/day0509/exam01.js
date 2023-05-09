function start() {
  let name = prompt("이름을 입력해 주세요");
  checkName(name);
}

function checkName(name) {
  if (name === null || name === "") {
    alert("다시입력해 주세요.");
    start();
  } else {
    console.log(name);
    alert(name + "님 안녕하세요.");
  }
}
