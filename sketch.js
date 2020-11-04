function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255);  
  translate(200,200);
  fill(255);
  angleMode(DEGREES);
  var hr=hour();
hrAngle=map(hr%12,0,12,0,360);  
var mn=minute();
mnAngle=map(mn,0,60,0,360);
var sc=second();
scAngle=map(sc,0,60,0,360);
push();
rotate(scAngle);
stroke("red");
strokeWeight(5);
line(0,0,100,0);
pop();
push();
rotate(mnAngle);
stroke("blue");
strokeWeight(6);
line(0,0,80,0);
pop();
push();
rotate(hrAngle);
stroke(80,220,100);
strokeWeight(7);
line(0,0,60,0);
pop();
stroke("red");
strokeWeight(5);
arc(0,0,300,300,0,scAngle);
stroke("blue");
strokeWeight(5);
arc(0,0,280,280,0,mnAngle);
stroke(80,220,100);
strokeWeight(5);
arc(0,0,260,260,0,hrAngle);
  drawSprites();
}