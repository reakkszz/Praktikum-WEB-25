var colors = ["#ff583378", "#8abf94ff", "#6a7295ff", "#a465a8ff", "#23413fff"];
var index = 0;
function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[index];
  index++;
  if (index >= colors.length) {
    index = 0;
  }
}
