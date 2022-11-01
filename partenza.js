var mySound; 
let immagine1;
let immagine2;

let sfondo = "red";
let coloretext = 0;

const urlString = window.location.href;
let url = new URL(urlString);
console.log (urlString, url);



function preload (){
  mySound = loadSound ("darksound.mp3");
  myImage = loadImage("./images/dante.jpeg");
  immagine1 = loadImage ("./images/hell1.png");
  immagine2 = loadImage ("./images/governo.jpg")
 }

function setup() {
  // use full screen size 
  createCanvas(windowWidth, windowHeight);
  frameRate (20)
  cursor(ARROW);
 
}

function draw() {
  background(sfondo);
  
  let myText1 = "Welcome to Hell. Click anywhere to enter and create your poster."; 
  push()
  textAlign(CENTER);
  textFont("Inconsolata")
  textSize (windowWidth/40);
  fill (coloretext)
  text(myText1, windowWidth/2, windowHeight/2);
  pop()

  let myText2 = "Press 'a' or 'c' to see what is waiting for you. Press 'b' to go back";
  push()
  textAlign(CENTER)
  textFont ("Inconsolata");
  textSize (15);
  fill (coloretext);
  text(myText2, windowWidth/2, 30)
  pop()
}

function keyTyped() {
  if (key === 'a') {
    sfondo = immagine1
    coloretext = "white"
  } else if (key === 'b') {
    sfondo = "red"
    coloretext = "black"
  } else if (key === 'c') {
    sfondo = immagine2
    coloretext = "red"
    }
}

function keyPressed (){
  if (mySound.isPlaying()) {
    // .isPlaying() returns a boolean
    mySound.stop();
  } else {
    mySound.play();
  }
}

  function mouseClicked () {
  window.open(url+ "page.html?myImage" + myImage, "_blank"); //we are linking the 2 pages when we click
    //use blank to open it in a new window or self to open it in the same one
  }
