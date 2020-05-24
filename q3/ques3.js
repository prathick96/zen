var elements = document.getElementsByClassName("column");
var i;
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "30%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
