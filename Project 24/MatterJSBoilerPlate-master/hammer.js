class Hammer {

     constructor(x,y){

      var  hammer_options={
        density:2,
        friction:1,
        restitution:0.5,  
    }

     this.thickness=100;
     this.height=50;   

     this.hammer= Bodies.rectangle(x,y,50,50,hammer_options)
       World.add(world,this.hammer);


     }

     display(){
        var pos =this.hammer.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle =this.hammer.angle;
        push();
        fill("yellow")
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.thickness,this.height);
        pop();
        }



}