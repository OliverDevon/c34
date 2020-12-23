class Ball{
    constructor(){
        this.body= Bodies.circle(100,100 ,50);
        World.add(gameWorld, this.body);
    }
    display(){
       ellipseMode(RADIUS);
        fill("black");
        ellipse(this.body.position.x, this.body.position.y ,50,50);
    }
}