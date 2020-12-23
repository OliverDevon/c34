class Ground{
    constructor(){
        this.body= Bodies.rectangle(500,380 ,1000,20, {isStatic: true});
        World.add(gameWorld, this.body);
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y ,1000,20);
    }
}