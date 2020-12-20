class Spring{
constructor(bodyA, pointB){
var options={
 bodyA:bodyA,
 pointB:pointB,
 length:75,
 stiffness:0.5,
}
this.pointB=pointB
this.spring=Constraint.create(options);
World.add(world,this.spring);

}
 birdReleased(){
this.spring.bodyA=null;

 }

display(){
  if (this.spring.bodyA!=null) {
    var posA=this.spring.bodyA.position;
    var posB=this.pointB;
  line (posA.x,posA.y,posB.x,posB.y);

  }
   
}





}