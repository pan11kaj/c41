class UMB{
    constructor(x,y){
    var options={
    isStatic:true
    }
     this.x = x;
     this.y = y;
     this.w = 20;
     this.h = 10;
     this.body = Bodies.rectangle(x,y,180,160,options);
     
      this.image = loadImage("Umbrella.png");
      this.image.scale = 4;
     World.add(world,this.body);
    


    }
    display(){
       
     imageMode(CENTER);
        image(this.image,this.x,this.y,180,160);
       
    }
}