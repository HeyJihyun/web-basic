$(function () {
  const confirmCheckbox = "label>input:checkbox";
  const checkboxes = "td>input:checkbox";

  // 확인란 체크박스가 클릭 됐을 때, 전체 선택 또는 전체 해제
  $(confirmCheckbox).click(function () {
    const lsAllChecked = $(confirmCheckbox).is(":checked");
    $("input:checkbox").prop("checked", lsAllChecked);
  });

  // $("label>input:checkbox").click(function () {
  //   if ($("label>input:checkbox").is(":checked")) {
  //     $("input:checkbox").prop("checked", true);
  //   } else {
  //     $("input:checkbox").prop("checked", false);
  //   }
  // });

  // 테이블 안에 하나라도 체크 안돼있다면 확인란 체크 해제, 전부 체크되어 있다면 체크
  $(checkboxes).click(function () {
    const isChecked =
      !($("td>input:checkbox:checked").length < $(checkboxes).length);
    $(confirmCheckbox).prop("checked", isChecked);
  });

  // 로그버튼 클릭 시 선택한 제목들 alert
  $("button").click(function () {
    const checkedCheckBoxes = $("td>input:checkbox:checked");
    if (checkedCheckBoxes.length <= 0) {
      alert("선택된 항목이 없습니다.");
    } else {
      let msg = "";
      checkedCheckBoxes.each(function () {
        msg += getSubject(this);
        msg += "\n";
      });
      alert(msg);
    }
  });

  function getSubject(element){
    return $(element).closest("tr").find("td:nth-child(2)").text();
  }
});
