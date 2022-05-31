var box1, box2;

function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(200,200,50,50,-2,-1);
  box2 = new Box(100,50,50,10);
}

function draw() 
{
  background("green");

  box1.show();
  box2.show();

  box1.moveX();
  box1.moveY();

}

