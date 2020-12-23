class Stone{
    constructor(x,y,r){
        var ops={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,ops);
        this.image=loadImage("sprites/stone.png");
        
        World.add(world,this.body);
        this.r=r;
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}