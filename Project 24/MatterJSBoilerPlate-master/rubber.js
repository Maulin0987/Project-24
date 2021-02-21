class Rubber {

     constructor (x,y,radius){

      var rubber_options ={
        restitution:0.3,
        friction:5,     
        density:1
      }
     
     this.radius=radius

      this.rubber= Bodies.circle(x,y,radius,rubber_options);
      World.add(world,this.rubber);



     }

     display(){
        var pos =this.rubber.position;
        var angle =this.rubber.angle;
        push();
        fill("blue")
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        circle(0,0,this.radius);
        pop();
        }


}