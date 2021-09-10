/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */ 
bal = new Bal; 

var x = 50;
var y = 50;
var speedx = 1;
var speedy = 2;

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {

  background('blue');

  // stel vulkleur in
  fill(255, 255, 255);

  // teken een cirkel
  ellipse(x,y,80,80);

  //positie van de bal updaten 
  x = x + speedx;
  y = y + speedy;

  if (y == 720) {
    speedy = speedy * - 1;
  }
}

function draw() {
  bal.show();
  bal.update();
}