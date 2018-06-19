// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 0;
var bleedYmax = cardH + (bleedPadH*2);

// dims for centered card area
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

// dims for centered padding area
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;


function setup() {
	createCanvas(bleedXmax, bleedYmax); //width and height of my canvas
	background(255);
	stroke("black");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("red");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("green");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	noStroke();



 from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, .33);
  c2 = lerpColor(from, to, .66);
  for (var i = 0; i < 15; i++) {
    fill(from);
    quad(random(-40, 220), random(height),
         random(-40, 220), random(height),
         random(-40, 220), random(height),
        random(-40, 220), random(height));
    fill(c1);
    quad(random(140, 380), random(height),
         random(140, 380), random(height),
         random(140, 380), random(height), 
         random(140, 380), random(height));
    fill(c2);
    quad(random(320, 580), random(height), 
         random(320, 580), random(height),
         random(320, 580), random(height), 
         random(320, 580), random(height));
    fill(to);
    quad(random(500, 760), random(height), 
         random(500, 760), random(height),
         random(500, 760), random(height), 
         random(500, 760), random(height));
  }
  frameRate(5);


	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(60);
	textStyle(NORMAL);
	textSize(fontSizeA);
	text("Esther Chiu", padXmin+bleedPadW*1.34, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/14); // maintain aspect ratio with text too
	fill(80);
	textStyle(NORMAL)
	textSize(fontSizeNorm);
	text("Fashion Designer", padXmin+bleedPadW*1.34, (padYmax*0.3)+fontSizeA);
	fill(90); // note color values - try to improve with cymk-style colors
	text("Contact", padXmin+bleedPadW*0.75, (padYmax*0.55)+fontSizeA);
	fill(90); // note 4th value is alpha (transparency)
	text("P: 0976806016", padXmin+bleedPadW*0.75, (padYmax*0.55)+(fontSizeA*2));
	fill(90);
	text("E: eyhchiu@gmail.com", padXmin+bleedPadW*0.75, (padYmax*0.55)+(fontSizeA*3));
	fill(90);
	text("IG/LINE: eyhchiu", padXmin+bleedPadW*0.75, (padYmax*0.55)+(fontSizeA*4));


}


 