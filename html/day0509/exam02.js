function enterNum() {
  let num = prompt("숫자를 입력해주세요.");
  checkNum(num);
}

function checkNum(num) {
  if (isNaN(num)) {
    alert("숫자를 입력해 주세요");
  } else if (num < 0 || num > 100) {
    alert("1이상 100 이하를 넣어주세요");
  } else {
    printNum();
  }
}

function printNum() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
  alert("완료되었습니다.");
}
