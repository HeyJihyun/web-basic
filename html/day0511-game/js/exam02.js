const ENEMY_SPEED_MIN_EASY = 1000;
const ENEMY_SPEED_MAX_EASY = 3000;
$(function () {
  const hero = $("#pompom");
  const enemy = $("#enemy");

  // 점프 중인지?
  let isJumping = false;

  // 점수
  let score = 0;

  gameStart();

  function gameStart() {
    setKeyboardEvent();
    enemyStart();
    checkGameOver();
  }
  function checkGameOver() {
    setInterval(function () {
      const heroRect = hero[0].getBoundingClientRect();
      const enemyRect = enemy[0].getBoundingClientRect();

      const isGameOver = isColliding(heroRect, enemyRect);
      console.log(isGameOver);

      if (isGameOver) {
        alert("끄앙");
        // hero.stop();
        // enemy.stp();
      }
    }, 1000 / 60);
  }

  function isColliding(hero, enemy) {
    return (
      hero.left < enemy.right &&
      hero.right > enemy.left &&
      hero.top < enemy.bottom &&
      hero.bottom > enemy.top
    );
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function enemyStart() {
    // 적이 오른쪽에서 왼쪽으로 이동
    const speed = getRandomNumber(1, 4) * 1000;
    enemy
      .animate({ right: "350px" }, speed, "linear")
      .animate({ right: "-50px" }, 0);
    setTimeout(enemyStart, 0);
  }

  function setKeyboardEvent() {
    $("html").keydown(function (e) {
      console.log(e.key);
      switch (e.key) {
        case " ":
          if (!isJumping) {
            jump();
          }
          break;
      }
    });
  }

  function jump() {
    isJumping = true;
    hero
      .animate({ bottom: "80px" }, 500)
      .animate({ bottom: "0" }, 500, function () {
        isJumping = false;
      });
  }
});
