class Rope{
    constructor(bodyA, bodyB,offsetX){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:offsetX,y:0}
        }
 
        this.offsetX = offsetX;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){

            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;

            push();
         
            stroke("grey");
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x+offsetX, pointB.y);
            
          pop();
        }
    
    
}