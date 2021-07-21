let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

// Tiles
for (let j = 1; j <= 3; j++) {
  for (let i = 1; i <= 5; i++) {
    c.fillStyle = "rgba(24,149,221,1)";
    c.fillRect((i - 1) * 59 + 4, (j - 1) * 16 + 4, 56, 13);
  }
}

// Block
c.fillStyle = "rgba(24,149,221,1)";
c.fillRect(120, 142, 55, 8);

// Ball

function animate() {
  requestAnimationFrame(animate);
  var x = Math.random() * 298;
  var y = Math.random() * 145;
  c.beginPath();
  c.arc(x, y, 2, 0, Math.PI * 2, false);
  c.fill();
  c.strokeStyle = "rgba(24,149,221,1)";
  c.stroke();
}

animate();
