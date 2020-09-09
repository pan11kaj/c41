class water{
    constructor(x,y){
    var options={
      isStatic:false,
        restitution:0
    }
    this.x= x;
    this.y = y;
    this.r = 10;
     this.body = Bodies.circle(x,y,10,options);
     World.add(world,this.body);


    }


    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("blue");
        ellipse(this.x,this.y,10);
            pop();
    }
    update(){
        if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,400),y:0})
        }   
       }
}