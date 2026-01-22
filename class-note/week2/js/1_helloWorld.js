// document.write("<h2>HELLO WORLD DYNAMIC</h2>");

window.onload = setup
//when the windows load, setup function will run.

function setup() {
    console.log("running setup");
    document.write("HELLO WORLD AFER LOAD IN FUNCTION");
}