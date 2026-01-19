"use strict";

// working with xueyi xia

//set the size, color, position for circle One.
let circleOne = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    r: 255,
    g: 255,
    b: 255,
}

//set the size, color, position for circle Two.
let circleTwo = {
    x: 130,
    y: 130,
    width: 70,
    height: 70,
    r: 250,
    g: 200,
    b: 210,
}

//set the size, color, position for circle Three.
let circleThree = {
    x: 200,
    y: 200,
    width: 100,
    height: 100,
    r: 200,
    g: 200,
    b: 210,
}

//draw the canvas and background color
function setup() {

    createCanvas(800, 400);

    background("#81a0e2ff");

}

//draw the Ellipse
function draw() {

    drawEllipse(circleOne.x, circleOne.y, circleOne.width, circleOne.height, circleOne.r, circleOne.g, circleOne.b);
    drawEllipse(circleTwo.x, circleTwo.y, circleTwo.width, circleTwo.height, circleTwo.r, circleTwo.g, circleTwo.b);
    drawEllipse(circleThree.x, circleThree.y, circleThree.width, circleThree.height, circleThree.r, circleThree.g, circleThree.b);

}

// QU2 draw three Ellipse
function drawEllipse(x, y, w, h, r, g, b) {
    push();
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w, h);
    pop();
}