const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const face = new Image();
const secondhand = new Image();
const minutehand = new Image();
const hourhand = new Image();
face.src = "clockFace.png";
secondhand.src = "secondHand.png"
minutehand.src = "minutesHand.png"
hourhand.src = "hoursHand.png"
function animate()
{
  let myTime = new Date();
  myTime.getSeconds();
  myTime.getMinutes();
  myTime.getHours();
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(face, canvas.width / 2 - (face.width / 2), canvas.height / 2 - (face.height / 2));
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(myTime.getSeconds() * 2 * Math.PI / 60);
  context.drawImage(secondhand, -70, -233);
  context.restore();
  context.save()
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(myTime.getMinutes() * 2 * Math.PI / 60);
  context.drawImage(minutehand, -20, -177);
  context.restore();
  context.save()
  context.translate(canvas.width / 2, canvas.height / 2);
  context.rotate(myTime.getHours() * 2 * Math.PI / 60);
  context.drawImage(hourhand, -20, -119);
  context.restore();

}
animate();
