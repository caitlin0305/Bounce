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
    var randomspeedX = random(-5, 5);
    var randomspeedY = random(-5, 5);
  
    var bal = new Bal (randomX, randomY, randomspeedX, randomspeedY);
  
    ballen.push(bal);
  }

  var superbal = new Superbal(400, 300, 10, 10);
  ballen.push (superbal);

  var nummerbal = new NummerBal(100, 100, 10, 10);
  ballen.push (nummerbal);
  
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

