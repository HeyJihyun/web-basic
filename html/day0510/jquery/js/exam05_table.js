$(function () {
  $("label>input:checkbox").click(function () {
    if ($("label>input:checkbox").is(":checked")) {
      $("input:checkbox").prop("checked", true);
    } else {
      $("input:checkbox").prop("checked", false);
    }
  });

  $("td>input:checkbox").click(function () {
    if ($("td>input:checkbox:checked").length < 6) {
      $("label>input:checkbox").prop("checked", false);
    } else {
      $("label>input:checkbox").prop("checked", true);
    }
  });

  $("button").click(function () {
    const checked = $("td>input:checkbox:checked");
    if (checked.length <= 0) {
      alert("선택된 항목이 없습니다.");
    } else {
      let msg = "";
      checked.each(function () {
        msg += $(this).closest("tr").find("td:nth-child(2)").text();
        msg += "\n";
      });
      alert(msg);
    }
  });
});
