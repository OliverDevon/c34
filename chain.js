class Chain{
    constructor(body1,point){
      var options={
          bodyA: body1,
          pointB: point,
          stiffness: 1,
          length: 200
      }
      this.chain= Constraint.create(options);
      this.pointB= point;
      World.add(gameWorld, this.chain);
      
    }
    display(){
        var posA= this.chain.bodyA.position;
        var posB = this.chain.pointB;
        strokeWeight(10);
    line(posB.x,posB.y ,posA.x,posA.y);
    
    }
}