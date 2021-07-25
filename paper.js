class Paper {
    constructor(x,y,radius){
      var options = {
          isStatic: true,
         // 'restitution' :1,
         // 'friction' :0.5,
         // 'density' :1.1,
      }
      this.x=x;
      this.y=y;
      this.radius= radius;
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x,y,radius/2);
      
      

      World.add(world,this.body);
    }
    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
};