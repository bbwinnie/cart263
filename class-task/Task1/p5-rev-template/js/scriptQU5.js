// set the defaut counter 
let counter = 0;

// set the size,color and position for orange square.
let orangeSquare = {
    x: 50,
    y: 50,
    size: 25,
    r: 255,
    g: 165,
    b: 0,
}

// set the size,color and position for red square.
let redSquare = {
    x: 80,
    y: 50,
    size: 25,
    r: 255,
    g: 0,
    b: 0,
}

// set the each circle will be 30 bigger
let radius = 30;

//set the circle 's size color and position
let circleP = {
    x: 450,
    y: 200,
    size: 25,
    r: 255,
    g: 255,
    b: 255,
    width: 2,
    sr: 153,
    sg: 0,
    sb: 76,
}

let circleNumber = 0;
let squareOver = false;
let redSquareOver = false;


//draw the canvas 
function setup() {

    createCanvas(900, 400);

}

//draw the three rectagle and background color
function draw() {

    background("#81a0e2ff");

    // display the square
    displaySquare();

    // chilk on the square counter start count
    checkCollisionWithSquare();

    // console.log(counter);


    circleNumber = counter;
    circleP.size = 25;
    circleAlpha = 40;

    //using the while loop to drawing the circle
    while (circleNumber > 0) {

        drawCircle(circleP.x, circleP.y, circleP.size, circleP.r, circleP.g, circleP.b, circleAlpha);
        circleP.size += radius;
        circleAlpha += 10;
        circleNumber--;
    }

}

//set the object for circle
function drawCircle(x, y, w, r, g, b, a) {
    push();
    stroke(r, g, b, a);
    fill(r, g, b, a);
    ellipse(x, y, w);
    pop();
}

//display the square
function displaySquare() {
    push();
    noStroke();
    fill(orangeSquare.r, orangeSquare.g, orangeSquare.b);
    rect(orangeSquare.x, orangeSquare.y, orangeSquare.size, orangeSquare.size);
    pop();

    push();
    noStroke();
    fill(redSquare.r, redSquare.g, redSquare.b);
    rect(redSquare.x, redSquare.y, redSquare.size, redSquare.size);
    pop();

}

//set the mouseClicked 
function mouseClicked() {
    if (squareOver === true && counter < 10) {
        counter += 1;
        orangeSquare.g = 219;
        orangeSquare.b = 187;

    }
    else {
        orangeSquare.r = 255;
        orangeSquare.g = 165;
        orangeSquare.b = 0;
    }

    if (redSquareOver === true && counter > 0) {
        counter -= 1;
        redSquare.g = 153;
        redSquare.b = 156;
    }
    else {
        redSquare.r = 255;
        redSquare.g = 0;
        redSquare.b = 0;
    }
}

//set the states for the mouse click. 
function checkCollisionWithSquare() {
    if (mouseX >= 50 && mouseX <= 75 && mouseY >= 50 && mouseY <= 75) {
        squareOver = true
    }
    else {
        squareOver = false
        orangeSquare.r = 255;
        orangeSquare.g = 165;
        orangeSquare.b = 0;
    }

    if (mouseX >= 80 && mouseX <= 105 && mouseY >= 50 && mouseY <= 75) {
        redSquareOver = true
    }
    else {
        redSquareOver = false
        redSquare.r = 255;
        redSquare.g = 0;
        redSquare.b = 0;
    }
}

