const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let myobject = {};
myobject.mypoint = new Point(window.innerWidth / 2, window.innerHeight / 2, 200, "red");
myobject.mypoint.draw(context);
myobject.pos = new Vector2d(300, 300);
myobject.vel = new Vector2d(10, 20);
function animate()
{
  context.clearRect(0, 0, window.innerWidth, window.innerHeight)
  requestAnimationFrame(animate);
  if (myobject.pos.dy > window.innerHeight - myobject.mypoint.r)
  {
    myobject.vel.dy = - myobject.vel.dy;
  }
  if (myobject.pos.dy < myobject.mypoint.r)
  {
    myobject.vel.dy = - myobject.vel.dy;
  }
  if (myobject.pos.dx > window.innerWidth - myobject.mypoint.r)
  {
    myobject.vel.dx = - myobject.vel.dx;
  }
  if (myobject.pos.dx < myobject.mypoint.r)
  {
    myobject.vel.dx = - myobject.vel.dx;
  }
  myobject.pos.add(myobject.vel);
  myobject.mypoint.x = myobject.pos.dx;
  myobject.mypoint.y = myobject.pos.dy;
  myobject.mypoint.draw(context);

}
animate();
function randomNumber(max)
{
  return Math.random()*max;
}
