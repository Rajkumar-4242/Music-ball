var canvas;
var music;
var ball,edges;
var block1;
var block2;
var block3;
var block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);



    //create 4 different surfaces
block1=createSprite(50,580,200,30)
block2=createSprite(270,580,200,30)
block1.shapeColor="red"
block2.shapeColor="blue"
block3=createSprite(490,580,200,30)
block4=createSprite(710,580,200,30)
block3.shapeColor="green"
block4.shapeColor="black"


    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=5
ball.velocityY=9
}

function draw() {
    background("cyan")
edges=createEdgeSprites()
ball.bounceOff(edges)
if (ball.isTouching(block1)&& ball.bounceOff(block1)){
    ball.shapeColor="red"
    music.play()
    
}
if (ball.isTouching(block2)&& ball.bounceOff(block2)){
    ball.shapeColor="blue"

}
if (ball.isTouching(block3)&& ball.bounceOff(block3)){
    ball.shapeColor="green"
}
if (ball.isTouching(block4)&& ball.bounceOff(block4)){
    ball.shapeColor="black"
    
}
    //create edgeSprite



 
    //add condition to check if box touching surface and make it box
    drawSprites()
}
