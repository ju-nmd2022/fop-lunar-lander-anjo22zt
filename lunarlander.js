background(255,255,255);

function flame(){
    noStroke();
    fill(255,180,0);
    triangle(75,210,125,210,100,270);
    fill(255,255,0);
    triangle(75,210,125,210,100,250);
}

function rocket(x,y){
    fill(0,0,0);
    triangle(100,170,150,220,50,220);
    
    fill(255,0,0);
    noStroke();
    triangle(100,100,130,200,70,200);
    ellipse(100,200, 59, 20);
    fill(0,0,0);
    stroke(0,0,0);
    triangle(100,100, 90,130, 110,130);
    }
  
    function moon(){
   fill(100,100,100);
   ellipse(300,400, 600, 150);
    }


    function draw() {
        moon();
        rocket();
    }

    

    
    
 
