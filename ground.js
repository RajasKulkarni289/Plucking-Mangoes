class Ground{
    constructor(x,y,wid,hei){
        var ops={
            isStatic:true,
            density:1
        }
        this.body=Bodies.rectangle(x,y,wid,hei,ops);
        this.width=wid;
        this.height=hei;

        World.add(world,this.body);
}
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}