var cat, garden, mouse;
var catImg1, catImg2, catImg3, catImg4;
var gardenImg;
var mouseImg1, mouseImg2, mouseImg3, mouseImg4;

function preload() {
    
    gardenImg = loadImage("garden.png");

    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png");
    catImg3 = loadAnimation("cat3.png");
    catImg4 = loadAnimation("cat4.png");

    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png");
    mouseImg3 = loadAnimation("mouse3.png");
    mouseImg4 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(800,800);

    garden = createSprite(400, 400);
    garden.addImage("gardenI", gardenImg);

    
    cat = createSprite(400, 400);
    cat.addAnimation("catI1", catImg1);

    mouse = createSprite(200,400);
    mouse.addAnimation("mouseI1", mouseImg1);



}

function draw() {

    background(255);
    Text(mouseX + ',' + mouseY, 10, 45);
    
    if(cat.x - mouse.x <=cat.width/2 + mouse.width/2
        && mouse.x - cat.x <=cat.width/2 + mouse.width/2
        && mouse.y - cat.y <=cat.height/2 + mouse.height/2
        && cat.y - mouse.y <=cat.height/2 + mouse.height/2){
        cat.addAnimation("catI2", catImg3);
        cat.changeAnimation("catI2");

        mouse.addAnimation("mouseI2", mouseImg4);
        mouse.changeAnimation("mouseI2");
        
        cat.velocityX = 0;
    }else{
        cat.changeAnimation("catI1");
    }

    drawSprites();
}


function keyPressed(){
   
   if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");
   } 


}
