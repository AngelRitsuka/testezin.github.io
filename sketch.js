var caixa;
var caixa2;

var angle = 60;

function setup() 
{
  //largura, altura
  createCanvas(windowWidth,windowHeight);

  caixa = createSprite(600,300,20,20);
  
  caixa2 = createSprite(300,300,50,50);
}


function draw() 

{
  background(30);

  if(keyIsDown(RIGHT_ARROW))
  {
    caixa.position.x = caixa.position.x + 10;
  }


  drawSprites();

}




