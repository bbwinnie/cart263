"use strict";

//set the size , color ,speed and position for the rect
let rectangleP = {
    x1: 50,
    y1: 50,
    size: 50,
    x2: 130,
    y2: 130,
    x3: 200,
    y3: 200,
    speed3: 3,
    r1: 255,
    g1: 0,
    b1: 0,
    r2: 0,
    g2: 255,
    b2: 0,
    r3: 0,
    g3: 0,
    b3: 255,

}

//draw the canvas and background color
function setup() {

    createCanvas(800, 400);

}

//draw the three rectagle
function draw() {

    background("#81a0e2ff");

    drawRect();

    //rectangle3 move each frame.
    rectangleP.y3 += rectangleP.speed3;
    if (rectangleP.y3 > height) {
        rectangleP.y3 = 0;
    }

    // drawRect(rectangleP.x1, rectangleP.y1, rectangleP.size, rectangleP.size, rectangleP.r1, rectangleP.g1, rectangleP.b1);
    // drawRect(rectangleP.x2, rectangleP.y2, rectangleP.size, rectangleP.size, rectangleP.r2, rectangleP.g2, rectangleP.b2);
    // drawRect(rectangleP.x3, rectangleP.y3, rectangleP.size, rectangleP.size, rectangleP.r3, rectangleP.g3, rectangleP.b3);
}

// function drawRect(x, y, w, h, r, g, b) {
//     push();
//     noStroke();
//     fill(r, g, b);
//     rect(x, y, w, h);
//     pop();
// }

//draw the three rectangle
function drawRect() {
    push();
    noStroke();
    fill(rectangleP.r1, rectangleP.g1, rectangleP.b1);
    rect(rectangleP.x1, rectangleP.y1, rectangleP.size, rectangleP.size);
    pop();

    push();
    noStroke();
    fill(rectangleP.r2, rectangleP.g2, rectangleP.b2);
    rect(rectangleP.x2, rectangleP.y2, rectangleP.size, rectangleP.size);
    pop();

    push();
    noStroke();
    fill(rectangleP.r3, rectangleP.g3, rectangleP.b3);
    rect(rectangleP.x3, rectangleP.y3, rectangleP.size, rectangleP.size);
    pop();
}

//when the mouse Clicked first rect move.
function mouseClicked() {
    rectangleP.y1 += 3;
}

// when the space bar pressed secound rect move.
function keyPressed() {
    if (key === ' ') {

    }
    rectangleP.x2 += 4;
    rectangleP.y2 += 4;
}

//whent the mouse moved thrid rect color changed
function mouseMoved() {
    rectangleP.r3 = random(0, 255);
    rectangleP.g3 = random(0, 255);
    rectangleP.b3 = random(0, 255);
}
