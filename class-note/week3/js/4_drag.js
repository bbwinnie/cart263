window.onload = setup;

function setup() {

    //callback function
    let handleDragging = function (event) {
        console.log("on drag")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);

        event.dataTransfer.clearData();
        event.dataTransfer.setData("objDraggedID", event.target.id);
    };

    //callback function
    let handleDraggingStop = function (event) {
        console.log("on stop")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
        // HERE - this refers to the window
        console.log(this);
    };

    let handleDrop = function (event) {
        event.preventDefault();
        console.log("dropped");
        console.log(event);

        let theObj = event.dataTransfer.getData("objDraggedID");
        event.target.appendChild(document.getElementById(theObj));
        //get the element we are append put it in to where we want.
    }

    window.addEventListener("dragover", function (event) {
        console.log("over");
        event.preventDefault();
    });


    window.addEventListener("drop", handleDrop);
    window.addEventListener("dragstart", handleDragging);
    window.addEventListener("dragend", handleDraggingStop);


}
