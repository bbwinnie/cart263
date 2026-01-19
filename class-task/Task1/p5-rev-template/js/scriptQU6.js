//draw the canvas and background color
function setup() {

    createCanvas(800, 400);

}

//draw the text 
function draw() {
    background("#81a0e2ff");

    displayText();

    //set the defaut number for the loop
    let n = 0;
    let b = 0;
    let x = 20;
    let y = 40;

    //set the for loop for the 0 to 9
    for (let i = 0; i <= 9; i++) {
        text(n, x, y);
        x += 23;
        n++;
    }

    //set the for loop for the 9 to 0
    let a = 9;
    let ax = 380;
    for (let i = 9; i >= 0; i--) {
        text(a, ax, 385);
        ax += 23;
        a--;
    }

    //set the for loop for the 0 to 15
    for (let i = 0; i <= 15; i++) {
        text(b, 20, y);
        y += 23;
        b++;
    }

    //set the for loop for the 15 to 0
    let c = 15;
    let cx = 587;
    let cy = 40;

    for (let i = 15; i >= 0; i--) {
        text(c, cx, cy);
        cy += 23;
        c--;
    }
}

//display the test text
function displayText() {
    textSize(28);
    fill(255, 255, 255);
    textAlign(CENTER)
    text("test", 800 / 2, 400 / 2);
}
