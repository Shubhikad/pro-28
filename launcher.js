class Launcher {
    constructor(bodyA, pointB){

        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.04
        }

        this.pointB = pointB;
        this.bodyA = bodyA;

        this.obj = Constraint.create(options);

        World.add(world, this.obj)

    }

    display(){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y)

          
    }
}