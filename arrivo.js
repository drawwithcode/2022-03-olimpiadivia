let myImage; 
let capture;
let mySound;
let textfield;
//let output;

const urlString = window.location.href;
let url = new URL (urlString);
let value = url.searchParams.get("myImage");
let immagine = JSON.parse(value);

//COSTANTI PER SCRITTA
let x = 0, y = 0;
let passo = 5.0;
let letters = "Per me si va ne la città dolente, per me si va ne l'etterno dolore, per me si va tra la perduta gente. Giustizia mosse il mio alto fattore; fecemi la divina podestate, la somma sapïenza e ’l primo amore. Dinanzi a me non fuor cose create se non etterne, e io etterno duro. Lasciate ogne speranza, voi ch’intrate’. Queste parole di colore oscuro vid’ïo scritte al sommo d’una porta; per ch’io: Maestro, il senso lor m’è duro. Ed elli a me, come persona accorta: Qui si convien lasciare ogne sospetto; ogne viltà convien che qui sia morta. Noi siam venuti al loco ov’i’ t’ho detto che tu vedrai le genti dolorose c’hanno perduto il ben de l’intelletto."

let fontSizeMin = 1;
let angleDistortion = 0.0;
let counter = 0;
let colore = ["red","black","white"]

//carico prima i suoni e l'immagine
function preload (){
  myImage = loadImage("./images/dante.jpeg");
  mySound = loadSound ("darksound.mp3");
 }


function setup() {
  // tutto schermo 
  createCanvas(windowWidth, windowHeight);
  imageMode (CENTER);
  backgroundImage (myImage);

  //testo
  smooth();
  cursor(TEXT);
  x = mouseX;
  y = mouseY;
  textAlign(LEFT);
  fill(colore[0]);

//webcam
  capture = createCapture(VIDEO);
  capture.size (windowWidth/5, windowWidth/5)
  capture.hide();


  push()
  let myText2 = "Press ! or 1 to save the poster"; 
  let myText3 = "Press BACKSPACE to turn the background black";
  textAlign(LEFT);
  textFont('Source Code Pro');
  textSize (windowWidth/90);
  fill (colore[0])
  text(myText2, width/22, height-60);
  text (myText3, width/22, height-40)
  pop()
}

function draw() {
  
  //scritta
  if (mouseOver) {
    let d = dist(x,y, mouseX,mouseY); //velocità spostamento cursore fa sì che cambi grandezza font
    textFont('Source Code Pro');
    textSize(fontSizeMin+d/2)
    let newLetter = letters.charAt(counter);;
    stepSize = textWidth(newLetter);

    if (d > passo) {
      let angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }

  //webcam
  push()
  tint (255, 0, 0);
  translate (windowWidth/2, windowHeight/2)
  scale (-1, 1);
  image(capture, 0, 0);
  pop()
}

function mouseOver() {
  x = mouseX;
  y = mouseY;
}

  function keyPressed () {
    //webcam activated
    if (keyCode == DELETE || keyCode == BACKSPACE) background("black");
    if (mySound.isPlaying()) {
      // .isPlaying() returns a boolean
      mySound.stop();
    } else {
      mySound.play();
    }
  }

function backgroundImage(myImage) {
  push();
  translate (width/2, height/2);
  let scale = Math.max(width/myImage.width, height/myImage.height);
  image (myImage, 0, 0, myImage.width*scale, myImage.height*scale)
  pop(); 
   }
  
   //per salvare screenshot poster
  function keyTyped() {
  if (key == '!' || key == '1') save("MeinHell.png");
  }

   function mouseClicked ( ){

  }