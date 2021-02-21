class Ground  {

    constructor(x,y,thickness,height){
       
        var ground_options ={
            isStatic:true
        }

       this.thickness=thickness;  
       this.height=height;

       this.ground= Bodies.rectangle(x,y,thickness,height,ground_options);
        World.add(world,this.ground);

     }

display(){
var position=this.ground.position;
fill("brown");
rectMode(CENTER);
rect(position.x,position.y,this.thickness,this.height);
}


}




