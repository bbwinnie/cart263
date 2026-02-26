
window.onload = setup;
//we need window.onload. 因为读到这个文件的时候，下面的都没有读，所以必须这样之后才能读到intro

function setup() {

    // let introSection = document.querySelector("#intro"); //select the element by id 
    // // querSelector even it select all Element, it will only work for the first one
    // // this varibale repersent our section

    // introSection.addEventListener("click",   // 监听点击

    //     function (e) { // 被点时：
    //         console.log(this);// - 打印这个元素 this 谁在监听事件
    //         console.log(e) //- 打印事件信息 （event）

    //         // this.style.background = `rgba(214, 110, 239, 0.5)` //  - 改它的背景颜色
    //         this.style.opacity = 0.5; // changing the opacity
    //     }


    // ); //1.name of the event 2. function

    // let selection = document.querySelectorAll(".mouseclick-active-section"); //让每一个class 都可以work的方法
    // selection.forEach(element => {
    //     element.addEventListener("click", function (e) {
    //         console.log(this);
    //         console.log(e);

    //         this.style.opacity = 0.5;
    //     });
    // });

    // let selection = document.querySelectorAll(".mouseclick-active-section");
    // selection.forEach(element => {
    //     element.addEventListener("click", function (e) {
    //         //when you click, if it is inavtive, do below. and set the custom-bool to active. so when you click secound not do again.
    //         if (this.getAttribute("custom-bool") === "inactive") {
    //             this.setAttribute("custom-bool", "active");
    //             //set the custom-bool active
    //             console.log("is inactive");
    //             console.log(this.id) //print it's id
    //             this.style.opacity = 0.5;
    //         }

    //         else {
    //             //if the state is inactive, than select change the state to inactive and set the opacity to 1
    //             this.setAttribute("custom-bool", "inactive");
    //             this.style.opacity = 1.0;
    //         }


    //     });
    // });



    let selection = document.querySelectorAll(".mouseclick-active-section");
    selection.forEach(element => {
        element.addEventListener("click", function (e) {
            //when you click, if it is inavtive, do below. and set the custom-bool to active. so when you click secound not do again.
            if (this.getAttribute("custom-bool") === "inactive") {
                this.setAttribute("custom-bool", "active");
                //set the custom-bool active
                console.log("is inactive");
                console.log(this.id) //print it's id
                this.style.opacity = 0.5;
            }

            else {
                //if the state is inactive, than select change the state to inactive and set the opacity to 1
                this.setAttribute("custom-bool", "inactive");
                this.style.opacity = 1.0;
            }
        });

        document.querySelector("#bubbleButton").addEventListener("click", function () {
            console.log("button clicked");

            let bubble = document.createElement("div");
            bubble.classList.add("bubble");
            bubble.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
            bubble.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
            console.log(bubble.style.left);

            let r = Math.ceil(Math.random() * 255); //new Math.ceil
            let g = Math.ceil(Math.random() * 255);
            let b = Math.ceil(Math.random() * 255);

            bubble.style.background = `rgba(${r},${g},${b})`;

            document.getElementById("top-layer").appendChild(bubble)
        });

    });

}


// ctrl + shift + c 快捷键帮你选中你想要看的东西 “chrom”
// ID need to be uniqe elements . class can be multipule elements. 
