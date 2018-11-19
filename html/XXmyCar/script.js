const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let car = new Image();
let carPosition = new Vector2d(0,600);
let carVelocity = new Vector2d(5,0);
var frontWheelVector = new Vector2d(672,119);

let street = new Image();
street.src = "street.png";

let frontWheel = new Image();
let rearWheel = new Image();
car.src = "car.png";
frontWheel.src = "wheel.png";
rearWheel.src = "wheel.png";
let rotation = 0;

car.addEventListener('load',()=>{
  //setInterval(loop,10);
  carPosition.dy = canvas.height - car.height-60;
  animate();
})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  context.drawImage(street,0,canvas.height-street.height);
  rotation += carVelocity.dx /80;
  carPosition.add(carVelocity);
  context.drawImage(car,carPosition.dx,carPosition.dy);

  context.save();
  context.translate(carPosition.dx+751,carPosition.dy+200);
  context.rotate(rotation);
  context.drawImage(frontWheel,-80,-80)
  context.restore();

  context.save();
  context.translate(carPosition.dx+210,carPosition.dy+200);
  context.rotate(rotation);
  context.drawImage(rearWheel,-80,-80)
  context.restore();

  if(carPosition.dx > canvas.width){
    carPosition.dx = -car.width;
  }
  if(carPosition.dx<-car.width){
    carPosition.dx = canvas.width;
  }
}

document.addEventListener('keydown',(evt)=>{
  var ifright = true;
  var ifleft = true;
  var leftspeed = 1;
  var rightspeed = 1;
  if(evt.key == "ArrowUp"){
    !positive;
  }
  if(evt.key == "ArrowLeft"){
    leftspeed = leftspeed + 0.1;
  }
  if(evt.key == "ArrowRight"){
    rightspeed = rightspeed + 0.1;
  }
  if(evt.key == "ArrowDown"){
    !negative
  }
  setTimeout(function x() {
    if (ifleft == false)
    {
      leftspeed = leftspeed / 11;
    }
    if (ifright == false)
    {
      rightspeed = rightspeed / 11;
    }
    carVelocity.dx = carVelocity.dx - leftspeed;
    carVelocity.dx = carVelocity.dx + rightspeed;
    x()
  }, 1000);
})
