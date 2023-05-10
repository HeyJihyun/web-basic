$(function () {
  $("input:submit").click(function () {
    const regEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;
    if (!regEmail.test($("#id").val())) {
      alert("아이디는 이메일 형식에 맞춰주세요.");
      return false;
    } else if ($("#password").val().length < 5) {
      alert("비밀번호는 5글자 이상 입력해 주세요.");
      return false;
    } else if ($("input:radio:checked").length === 0) {
      alert("성별을 선택해 주세요.");
      return false;
    } else if ($("select").val().length === 0) {
      alert("직업을 선택해 주세요.");
      return false;
    } else if ($("input:checkbox:checked").length < 3) {
      alert("취미는 3개 이상 선택해 주세요.");
      return false;
    }

    alert("회원가입이 완료되었습니다.");
  });
});
