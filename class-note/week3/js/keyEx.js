let speedX = 5;
let fastSpeedX = 10;
let turbo = false;

window.onload = function () {

    //when you doing the animate or game you can use the time crount.
    // window.setTimeout(addTimeoutText, 5000);
    // function addTimeoutText() {
    //     let parent = document.getElementById("boxB");
    //     parent.innerHTML += " NEW TEXT TO APPEAR ";
    // }

    //this make the every sec it will add nex text to appear.
    // window.setInterval(addTextRecur, 1000);
    // function addTextRecur() {
    //     let parent = document.getElementById("boxB");
    //     parent.innerHTML += " NEW TEXT TO APPEAR ";
    // }

    window.setInterval(moveBoxB, 20);
    function moveBoxB() {
        document.getElementById("boxB").style.left =
            parseInt(document.getElementById("boxB").style.left) + speedX + "px";
    }



    window.addEventListener("keydown", function (event) {
        console.log(event.key);
        //event will print the event of key. but event.key will direct print the key that you push
        // document.querySelector("#textContainer").textContent += `${event.key} `;

        // document.getElementById("textContainer").textContent += `${event.code} `;
        //if you use this way you don't need # 

        if (event.key === "ArrowRight") {
            if (turbo) {
                document.getElementById("boxA").style.left =
                    parseInt(document.getElementById("boxA").style.left) + fastSpeedX + "px";

            }
            else {
                document.getElementById("boxA").style.left =
                    parseInt(document.getElementById("boxA").style.left) + speedX + "px";

            }

            //looking at left propoty of the element box A add speedX to that number.

        } else if (event.key === "ArrowLeft") {
            if (turbo) {
                document.getElementById("boxA").style.left =
                    parseInt(document.getElementById("boxA").style.left) - fastSpeedX + "px";
            }
            else {
                document.getElementById("boxA").style.left =
                    parseInt(document.getElementById("boxA").style.left) - speedX + "px";
            }

        }
        else if (event.key === "Shift") {
            turbo = true;

            document.getElementById("boxA").style.background = "rgb(226, 112, 177)";
        }

        window.addEventListener("keyup", function (event) {
            console.log("keyup");
            //2: change color when space is down

            if (event.key === "Shift") {
                turbo = false;

                document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
            }
            else {
                console.log(`key up not shift:`);
                console.log(event);
            }
        });

    });
}
