$(function () {
  const player = $("#player");
  const monster = $("#monster");

  // 점프 중인지?
  let isJumping = false;
  // 점수
  let score = 0;

  gameStart();

  function gameStart() {
    setKeyboardEvent();
    moveBackground();
    enemyStart();
    checkGameOver();
  }

  // 배경 움직이는 함수
  function moveBackground() {
    let position = 0;
    setInterval(function () {
      $(".container").css("background-position", position-- + "px");
    }, 10);
  }

  // 키보드 입력이벤트 함수
  function setKeyboardEvent() {
    $("html").keydown(function (e) {
      console.log(e.key);
      console.log("why");
      switch (e.key) {
        case " ":
          if (!isJumping) {
            jump();
          }
          break;
      }
    });
  }

  // 플레이어 점프
  function jump() {
    isJumping = true;
    player
      .animate({ bottom: "130px" }, 500)
      .animate({ bottom: "50px" }, 500, function () {
        isJumping = false;
      });
  }

  // 적의 속도 조절 용 랜덤 넘버 함수
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 적이 오른쪽에서 왼쪽으로 이동
  function enemyStart() {
    const speed = getRandomNumber(1500, 4000);

    let interval;
    interval = setInterval(moveMonster, 10);
    function moveMonster() {
      monster
        .animate({ right: "500px" }, speed, "linear")
        .animate({ right: "-50px" }, 0);
    }

    interval = setInterval(moveMonster, 10);
  }

  function checkGameOver() {
    setInterval(function () {
      checked = isColliding();
      console.log(checked);

      if(checked){
        
      }

    }, 1000 / 60);
  }

  function isColliding() {
    const playerRect = player[0].getBoundingClientRect();
    const monsterRect = monster[0].getBoundingClientRect();
    checked =
      playerRect.left < monsterRect.right &&
      playerRect.right > monsterRect.left &&
      playerRect.top < monsterRect.bottom &&
      playerRect.bottom > monsterRect.top;
    return checked;
  }
});
