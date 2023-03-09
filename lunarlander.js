 function setup(){
  createCanvas(500,500);
 }
 
 // Ufo
  function ufo(x, y) {
    translate(x,y);
    fill(0,0,0);
    triangle(x,y+50,x-50,y+110,x+50,y+110);
    
    fill(255,0,0);
    noStroke();
    triangle(x,y,x+30,y+100,x-30,y+100);
    ellipse(x,y+100, 59, 20);
    fill(0,0,0);
    stroke(0,0,0);
    triangle(x,y, x-10,y+30, x+10,y+30);
    }
  
    function flag(){
     rect(350,350, 10,10);
    }

    function moon(){
   fill(100,100,100);
   rect(0,350, 1000,200);
    
  }
  

  
  // ufo smashed
  function crashedUfo (){
    fill(0,0,0);
    triangle(200,340, 125, 350, 275,350);
    fill(255,0,0);
    strokeWeight(4);
    triangle(200,320,150,350,250,350);
    fill(0,0,0);
    triangle(200,320,175,330, 225, 330);
  }
  
  
  // Scenery
  function scenery() {
    push();
    noStroke();
  
    background(0,0,100);
    //stars
    fill(255,255,255);
    ellipse(100, 200, 5,5);
    ellipse(25, 25, 5,5);
    ellipse(350, 170, 5,5);
    ellipse(250, 100, 5,5);
    ellipse(400, 50, 5,5);
    ellipse(200, 300, 5,5);
    ellipse(450, 300, 5,5);

  
    // moon, surface
    fill(100,100,100);
   rect(0,350, 1000,400);
  }
  
  // Menu screen
  function menuScreen() {
    scenery();
    fill(255, 170, 50);
    textSize(20);
    text("CLICK TO START GAME", 20, 100);
    textSize(15);
    text("use spacebar to slow down the ufo", 20, 150);
  }

  
  // Game over screen
  let crashedY = 410;
  let speed = 14;
  let crashActive = true;
  
  function gameOverScreen() {
    scenery();
    crashedUfo(100, crashedY);
    fill(255, 0, 0);
    textSize(38);
    text("GAME OVER", 200, 250);
    textSize(24);
    text("Click to restart the game", 100, 100);
  
    if (crashActive) {
      crashedY = crashedY - speed;
    }
    if (crashedY <= 230) {
      crashActive = false;
    }
  }
  
  // win screen
  function youWinScreen() {
    scenery();
    ufo(100, 120);
    fill(255, 170, 50);
    textSize(38);
    text("YOU DID IT!", 100, 100);
    textSize(24);
    text("Click to restart the game", 100, 200);

    //flag
    noStroke();
    fill(255,255,255);
    rect(-50,100,10,130);
    fill(0,0,255);
    rect(-40,100,70,50);
    fill(255,255,0);
    rect(-25,100,10,50);
    rect(-40,120,70,10);
  }
  
  //start
  function mouseClicked() {
    if (screen === 0 || screen == 3 || screen == 2) {
      console.log("Mouse clicked");
      ufoY = -60;
      velocity = 1;
      screen = 1;
    }
  }
  
  // Game screen
  let ufoY = -60;
  let velocity = 1.5;
  let acceleration = 0.2;
  let screen = 0;
  
  function gameScreen() {
    scenery();
  
    ufoY = ufoY + velocity;
  
    if (keyIsDown(32)) {
      ufo(100, ufoY);
      velocity = velocity - 0.2;
    } else {
      ufo(100, ufoY);
      velocity += 0.2;
    }
    console.log(velocity);
  
    if (ufoY > 120) {
      if (velocity > 2) {
        screen = 2;
      }
      if (velocity < 2) {
        screen = 3; 
      }
    }
  }
  
  // Assigned numbers to the screens
  function draw() {
    if (screen === 0) {
      menuScreen();
    } else if (screen === 1) {
      gameScreen();
    } else if (screen === 2) {
      gameOverScreen();
    } else if (screen === 3) {
      youWinScreen();
    }
  }
  