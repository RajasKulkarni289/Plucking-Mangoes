class Mango{
    constructor(x,y,r){
var ops={
    isStatic:true,
    restitution:0,
    friction:1
}
this.body=Bodies.circle(x,y,r,ops);
World.add(world,this.body);
this.image=loadImage("sprites/mango.png");
this.r=r;
}
 display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
   pop();
 }
}