class Dustbin {
    constructor(x,y){
       var options ={
         isStatic: true
       }  
      this.x=x;
      this.y=y;
      this.dustbinWidth= 10;
      this.dustbinHeight = 13;
      
      this.image=loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
     
      World.add(world,this.body);
    }
    
    display(){
        var dustbinPos=this.body.position;

        push()
        translate(dustbinPos.x,dustbinPos.y);
        imageMode(CENTER);
        strokeWeight(4);
        fill(225);
        image(this.image,0,0,this.width,this.height);
        pop()
    }
};