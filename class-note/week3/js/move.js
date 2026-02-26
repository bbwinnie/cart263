window.onload = function () {
    let drawBox = document.querySelector("#draw-box-a");

    drawBox.addEventListener("mousemove", moveCallBack);

    // function moveCallBack(e) {
    //     console.log("mouse move");
    //     // B: note these are the same ... 
    //     console.log(this);
    //     console.log(e.target);
    // }

    function moveCallBack(e) {
        let rect = this.getBoundingClientRect();
        console.log(rect);

        let offsetX = e.clientX - rect.x;
        let offsetY = e.clientY - rect.y;

        // drawBox.innerHTML = `x: ${e.clientX}, y:${e.clientY}`;
        // drawBox.innerHTML = `offset_x: ${offsetX}, offset_y:${offsetY}`;

        let pointDiv = document.createElement("div");
        pointDiv.classList.add("point");

        pointDiv.style.left = offsetX + "px";
        pointDiv.style.top = offsetY + "px";

        this.appendChild(pointDiv);

    }


}