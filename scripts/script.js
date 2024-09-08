//==========DROPDOWN=============
function dropdown() {
  document.getElementById("js-dropdown").classList.toggle("show")
}
window.onclick = function(element) {
  if (!element.target.matches(".drop-btn")) {
    var dropdown = document.getElementById("js-dropdown")
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
  }
}