var color = ["red", "green", "blue", "yellow", "purple"];
var index = 0;
function ubahbackground() {
  document.body.style.backgroundColor = color[index];
  index++;
  if (index >= color.length) {
    index = 0;
  }
}
