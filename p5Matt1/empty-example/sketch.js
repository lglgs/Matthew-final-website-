var blink=5;
var textx=0;

function setup() {
createCanvas(600,400);
}

function draw() {
background(0,200,200);
  fill(0,150,100);
    stroke(0,0,250);
    strokeWeight(4);
    ellipse(225,100,40,20);
    ellipse(400,100,40,blink);
     noFill();
   arc(300, 200, 150, 50, 0, PI / 1.0);       
if(blink>40){
   blink=5;
}else{
    blink=blink+1;
 }
fill(0,255,50);
stroke(255,255,0);
strokeWeight(3);
textSize(30);
textFont("Georgia");
textStyle(ITALIC);
text('hello, nice to meet you',textx,350);
    
// add a coditional
if(textx>600){
   textx=0;
}else{
    textx=textx+5;
 }
}
