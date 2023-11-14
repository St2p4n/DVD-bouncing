/*const canvas = document.getElementById("canvas");

const ctx  = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(500, 200, 200, 300);

ctx.strokeStyle = "pink";
ctx.strokeRect(225,200,200,300);

ctx.fillStyle = "green";
ctx.fillRect(225,600,200,300);

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(50,100);
ctx.lineTo(100,100);
ctx.lineTo(50,50);
ctx.fillStyle = "black";
ctx.fill();*/

/*ctx.beginPath();
ctx.arc(205, 230, 200, 0, 2 * Math.PI);
ctx.lineWidth = "6";
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill()


ctx.beginPath();
ctx.arc(145, 140, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill()

ctx.beginPath();
ctx.arc(280, 140, 40, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill()

ctx.fillStyle = "black";
ctx.fillRect(140, 220, 200, 20);

ctx.beginPath();
ctx.moveTo(100, 70);
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 70);
ctx.lineTo(220, 100);
ctx.stroke();


ctx.strokeStyle = "black";
ctx.strokeRect(505,200,200,200);

ctx.fillStyle = "brown";
ctx.fillRect(580,350,40,48);

ctx.strokeStyle = "black";
ctx.strokeRect(535,250,40,40);

ctx.strokeStyle = "black";
ctx.strokeRect(640,250,40,40);


ctx.beginPath();
ctx.moveTo(100,20);
ctx.lineTo(175,100);
ctx.lineTo(20,100);
ctx.lineTo(100,20);
ctx.fillStyle = "black";
ctx.fill();*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = new Image();
image.src = "./res/img/DVD_logo.svg.png";

let x = 0;
let y = 0;
let xVelocity = 1;
let yVelocity = 1;
let imageWidth = 130;
let imageHeight = 80;
let shapeColor = "black";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", () => {
  resizeCanvas();
});

window.onload = () => {
  resizeCanvas();
  setInterval(() => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    x += xVelocity;
    y += yVelocity;

    if (y + imageHeight >= canvas.height || y <= 0) {
      yVelocity *= -1;
      shapeColor = getRandomColor(); 
    }
    if (x + imageWidth >= canvas.width || x <= 0) {
      xVelocity *= -1;
      shapeColor = getRandomColor(); 
    }

    ctx.fillStyle = shapeColor;
    ctx.fillRect(x, y, imageWidth, imageHeight);
    ctx.globalCompositeOperation = "source-atop";
    ctx.drawImage(image, x, y, imageWidth, imageHeight);
    ctx.globalCompositeOperation = "source-over"; 
  }, 1);
};

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
