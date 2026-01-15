"use strict";

// set the position and color for rect
let rectangleB = {
    x1: 0,
    y1: 0,
    r1: 100,
    g1: 149,
    b1: 237,
    r2: 137,
    g2: 207,
    b2: 240,
    r3: 115,
    g3: 147,
    b3: 179,
}

//draw the canvas 
function setup() {

    createCanvas(900, 400);

}

//draw the three rectagle and background color
function draw() {

    background("#81a0e2ff");

    //draw the three rectangle
    drawRect();

    //change the color for rectangle
    changeColorRect1();
    changeColorRect2();
    changeColorRect3();
}


//draw the rectangle
function drawRect() {
    push();
    noStroke();
    fill(rectangleB.r1, rectangleB.g1, rectangleB.b1);
    rect(rectangleB.x1, rectangleB.y1, width / 3, height);
    pop();

    push();
    noStroke();
    fill(rectangleB.r2, rectangleB.g2, rectangleB.b2);
    rect(width / 3, rectangleB.y1, width / 3, height);
    pop();

    push();
    noStroke();
    fill(rectangleB.r3, rectangleB.g3, rectangleB.b3);
    rect(width * 2 / 3, rectangleB.y1, width / 3, height);
    pop();

}

//change the color when mouse on the first rect
function changeColorRect1() {
    if (mouseX <= width / 3 && mouseY >= 0 && mouseY <= height) {
        rectangleB.r1 = 255;
        rectangleB.g1 = 255;
        rectangleB.b1 = 255;
    }
    else {
        rectangleB.r1 = 100;
        rectangleB.g1 = 149;
        rectangleB.b1 = 237;
    }
}

//change the color when mouse on the secound rect
function changeColorRect2() {
    if (mouseX > width / 3 && mouseX < width * 2 / 3 && mouseY >= 0 && mouseY <= height) {
        rectangleB.r2 = 255;
        rectangleB.g2 = 255;
        rectangleB.b2 = 255;
    }
    else {
        rectangleB.r2 = 127;
        rectangleB.g2 = 207;
        rectangleB.b2 = 240;
    }
}

//change the color when mouse on the third rect
function changeColorRect3() {
    if (mouseX > width * 2 / 3 && mouseX < width && mouseY >= 0 && mouseY <= height) {
        rectangleB.r3 = 255;
        rectangleB.g3 = 255;
        rectangleB.b3 = 255;
    }
    else {
        rectangleB.r3 = 115;
        rectangleB.g3 = 147;
        rectangleB.b3 = 179;
    }
}

