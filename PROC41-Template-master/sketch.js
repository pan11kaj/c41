const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var man;
var maxdrop =100;
var drops = [];


function preload(){
manimg = loadImage("men.jpg")
light1=  loadImage("lights.jpg");
light2=  loadImage("light.jpg");
}

function setup(){
createCanvas(600,600);   
engine = Engine.create();
world = engine.world;

Water = new water(200,200);
man = createSprite(200,500);
man.addImage(manimg);
man.scale = 0.5;

umbrella = new UMB(150,383);

for(var i=0; i<maxdrop; i++){
    drops.push( new water(i,0));
   }

Engine.run(engine);
}

function draw(){
background(1,1,1);


drawSprites();

for(var i=0; i<maxdrop; i++){
    drops[i].display();
    drops[i].update();
   }

Water.display();
umbrella.display();
lighting();
} 







//create function light

function lighting(){
if(frameCount%50 === 0){
image(light1,random(0,400),0);
}
if(frameCount%20 === 0){
    image(light2,random(0,500),0);
}

}
