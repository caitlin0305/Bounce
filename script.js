/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */ 

var ballen = [];


function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  for(var i = 0; i < 25; i++) {
    var randomX = random(50,1230);
    var randomY = random(50, 670);
    var randomspeedX = random(-5, 51);
    var randomspeedy = random(-5, 51);
  
    var bal = new Bal(randomX, randomY, randomspeedX, randomspeedY);
  
    ballen.push(bal);
  }
}



/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {

  background('blue');
  for(var i = 0; i < ballen.length; i++) {
   ballen[i].show();
   ballen[i].update();
  }
 
}

