var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ["/Users/patricia/Desktop/PacMan/PacMan1.png", "/Users/patricia/Desktop/PacMan/PacMan2.png"],
  ["/Users/patricia/Desktop/PacMan/PacMan3.png", "/Users/patricia/Desktop/PacMan/PacMan4.png"],
];
var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }
}
setInterval(Run, 200);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction == 1 && pos < 0) direction = 0;

  return direction;
}

module.exports = checkPageBounds;