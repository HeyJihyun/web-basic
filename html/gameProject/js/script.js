$(function () {
  const player = $("#player");
  const monster = $("#monster");
  let isMonsterStopped = true;

  // 점프 중인지?
  let isJumping = false;
  // 점수
  let score = 0;
  let position = 0;

  let playing;

  gameStart();

  function gameStart() {
    setKeyboardEvent();
    enemyStart();
    playing = setInterval(function () {
      if (!checkGameOver()) {
        moveBackground();
      } else {
        gameOver(playing);
      }
    }, 1000 / 120);
  }

  // 배경 움직이는 함수
  function moveBackground() {
    $(".container").css("background-position", position-- + "px");
    if (position === -995) {
      position = 0;
    }
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
    monster
      .animate({ right: "500px" }, speed, "linear",function () {
        // 점수 올리자
        score += 100;
        // updateScore(score);

        // 적 리셋
        monster.css('right', '-50px');
        enemyStart();
      });
  }

  // 게임오버 체크

  // 게임오버 조건
  function checkGameOver() {
    const playerRect = player[0].getBoundingClientRect();
    const monsterRect = monster[0].getBoundingClientRect();
    checked =
      playerRect.left + 35 < monsterRect.right + 5 &&
      playerRect.right > monsterRect.left  + 5  &&
      playerRect.top < monsterRect.bottom + 5 &&
      playerRect.bottom > monsterRect.top  + 5;

    console.log(checked);

    return checked;
  }

  function gameOver(playing) {
    clearInterval(playing);
    $(".gameOverConatainer").slideDown();
    player.stop();
    monster.stop();
  }
});
