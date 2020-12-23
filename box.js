class Box{
    constructor(x,y ,width,height){
        this.body= Bodies.rectangle(x,y ,width,height);
        World.add(gameWorld, this.body);
        this.width= 50;
        this.height= 50;
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        stroke("green")
        rect(this.body.position.x, this.body.position.y ,this.width,this.height);
    }
}