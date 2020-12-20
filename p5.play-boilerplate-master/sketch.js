var pinkoObject,ParticleObject,DivisionObject;
var GroundObject;


function setup() {
  createCanvas(800,400);
  pinkoObject=new Pinko(400, 200,10);
  ParticleObject=new Particle(200,200,5);
  DivisionObject=new Division(200,200,20,200);
  GroundObject= new Ground(200,200,200,20);
}
var particles=[];
var plinkos=[];
var divisions=[];
var devisionHieght=300;
function draw() {
  background(255,255,255);  
  for (var k=0;k<=Width;k=k+80){
    divisions.push(new Divisions(k,hieght-divisionsHieght/2,10,divisionsHieght));
  }
 for (var j =40;j <=Width;j=j+50)
 {
   pinkoObject.push(new pinkoObject(j,75));
 }
 for (var j=15;j<=width-10;j=j+50)
 {
   pinkoObject.push(new pinkoObject(j,175));
 }
 for (var j=15;j<=width-10;j=j+50)
 {
   pinkoObject.push(new pinkoObject(j,265));
 }

for (var j=0;j<particles.length; j++){
  particles[j].display();
}
for (var k=0;k<divisions.length; k++) {
  divisions[k].display();
}
if (frameCount%60===0){
   particles.push(new ParticleObject(Random(width/2-10,width/2+10),10,10))
}


  DivisionObject.display();
  pinkoObject.display();
  DivisionObject.display();
  GroundObject.display();
  drawSprites();
}