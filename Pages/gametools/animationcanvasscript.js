
const canvas2 = document.getElementById("anim");
const ctx2 = canvas2.getContext("2d");

let x2 = 20;
let y2 = 20;
let vx = 2;
let vy = 2;
const size2 = 30;

function animate() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  // move
  x2 += vx;
  y2 += vy;

  // bounce
  if (x2 < 0 || x2 + size2 > canvas2.width) vx *= -1;
  if (y2 < 0 || y2 + size2 > canvas2.height) vy *= -1;

  ctx2.fillStyle = "blue";
  ctx2.fillRect(x2, y2, size2, size2);

  requestAnimationFrame(animate);
}

animate();