function changeColor(element) {
  const selectList = document.querySelectorAll(".select");
  selectList.forEach((select) => {
    select.classList.remove("select");
  });

  element.className = "select";
}
