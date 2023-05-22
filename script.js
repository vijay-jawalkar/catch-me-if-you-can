var box = document.getElementById("box");

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

// update the width and height of window, whenever resize;
window.addEventListener("resize", function () {
  viewWidth = window.innerWidth;
  viewHeight = window.innerHeight;
});

// this function is used to get postion of box from left and top side
function getNewPosition(boxWidth, boxHeight) {
  var newX = Math.floor(Math.random() * viewWidth) + 1 - boxWidth;
  var newY = Math.floor(Math.random() * viewHeight) + 1 - boxHeight;

  if (newX < 0) {
    newX = 0;
  }

  if (newY < 0) {
    newY = 0;
  }

  return { x: newX, y: newY };
}

box.addEventListener("mouseover", function () {
  var boxAttr = box.getBoundingClientRect();
  var pos = getNewPosition(boxAttr.width, boxAttr.height);

  box.style.left = pos.x + "px";
  box.style.top = pos.y + "px";
});
