const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let kineticObject =
{

};
function setUp()
{
  kineticObject.pos = new Vector2d(500,100);
  kineticObject.vel = new Vector2d(10,0);
  kineticObject.acc = new Vector2d(0,0.5);
  animate();
}
function animate()
{
  context.clearRect(0,0,canvas.width,canvas.height)
  requestAnimationFrame(animate);
  kineticObject.vel.add(kineticObject.acc);
  kineticObject.pos.add(kineticObject.vel);
  kineticObject.point = new Point(200,300,10, "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")");
  kineticObject.point.position(kineticObject.pos);
  kineticObject.point.draw(context)
  if(kineticObject.pos.dx > canvas.width)
  {
    kineticObject.vel.dx = - kineticObject.vel.dx;
    kineticObject.pos.dx = canvas.width;
  }
  if(kineticObject.pos.dx < 0)
  {
    kineticObject.vel.dx = - kineticObject.vel.dx;
    kineticObject.pos.dx = 0;
  }
  if(kineticObject.pos.dy > canvas.height)
  {
    kineticObject.vel.dy = - kineticObject.vel.dy;
    kineticObject.pos.dy = canvas.height;
  }
  if (kineticObject.pos.dy < 0)
  {
    kineticObject.vel.dy = - kineticObject.vel.dy;
    kineticObject.pos.dy = 0;
  }
}
setUp();
