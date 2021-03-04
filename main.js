canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var bgobject;
var roverobject;
var x = 0;
var y = 0;
function addpicture() {
  bgobject = new Image();
  bgobject.src = "mars.jpg";
  roverobject = new Image();
  roverobject.src = "rover.png";
  bgobject.onload = uploadbackground;
  roverobject.onload = uploadrover;
}
function uploadbackground() {
  ctx.drawImage(bgobject, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
  ctx.drawImage(roverobject, x, y, 100, 100);
}
window.addEventListener("keydown", keypress);
function keypress(event) {
  console.log(event);
  var keycode = event.keyCode;
  if (keycode == 37) {
    console.log("moveleft");
    moveleft();
  }
  if (keycode == 39) {
    console.log("moveright");
    moveright();
  }
  if (keycode == 40) {
    console.log("movedown");
    movedown();
  }
  if (keycode == 38) {
    console.log("moveup");
    moveup();
  }
}
function moveright() {
  if (x<700) {
    x = x + 10;
    uploadbackground();
    uploadrover(); 
  }
  
}
function moveup() {
  y = y - 10;
  uploadbackground();
  uploadrover();
}
function moveleft() {
  x = x - 10;
  uploadbackground();
  uploadrover();
}
function movedown() {
  y = y + 10;
  uploadbackground();
  uploadrover();
}
