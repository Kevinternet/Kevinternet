const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// square properties
let x = 50;
let y = 50;
const size = 30;
const speed = 1.2;

// track keys
const keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function update() {
  if (keys["ArrowUp"]) y -= speed;
  if (keys["ArrowDown"]) y += speed;
  if (keys["ArrowLeft"]) x -= speed;
  if (keys["ArrowRight"]) x += speed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, size, size);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();

