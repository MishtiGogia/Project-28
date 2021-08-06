class Launcher{
    constructor(bodyA,pointB){
       var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.1,
        lenght:6
       }
       this.pointB= pointB;
       this.sling= Constraint.create(options);
       World.add(world,this.sling);

    }
    display(){
    if(this.sling.bodyA){
   
    push();
    strokeWeight(3);
    line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y); 
    pop();
}
    }
    fly(){
     this.sling.bodyA = null;   
    }
    attach(body){
     this.sling.bodyA = body;
    }
}