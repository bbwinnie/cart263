window.onload = setup
//when the page onload.. loading setup function

window.onclick = setup
//when the page finised the loading, when you click the windows setup function will run.

// function setup() {
//     console.log(document.getElementById("one")); //Getting an Element by ID
//     //you can get the html id by using document.getElementById

//     console.log(document.getElementsByTagName("div").length); //Getting Elements by TAG NAME .length = total div number
//     console.log(document.getElementsByTagName("div")[0]);  // Getting the first element

//     console.log(document.getElementsByClassName("square_shape")); //Getting Elements by CLASS NAME

//     document.getElementById("two").innerHTML = "<p> i was dynmically changed</p>";
//     //chaging element

//     document.getElementById("two").parentElement.innerHTML = "<p> i was dynmically changed</p>";
//     //changing two's parenetElement 改变id two 的父母tag为<p>

//     document.getElementById("two").parentElement.children[0].innerHTML = "<p> i was dynmically changed</p>";
//     //chaing the id one to <p>. 从IDtwo到父母tag，在到他的第一个孩子tag。改变为<p>

//     document.getElementById("two").style.background = "red";
//     //chaing the backround to red.
// }

//console.log(document.getElementById("one"));
// you can not put this out of setup. it will not wokring.

function setup() {
    let newDivTwo = document.createElement("div");
    newDivTwo.classList.add("square_shape");
    newDivTwo.innerHTML = "<p>NEW ELEMENT TWO</p> ";
    newDivTwo.style.backgroundColor = "yellow";
    newDivTwo.querySelector("p").style.color = "black"
    //querySelector just select by p to acces the 

    let sibling = document.querySelector("#three") // #three to acces the if three .three = class three
    let parentElementAgain = document.querySelector(".wrapper_flex_box")
    parentElementAgain.insertBefore(newDivTwo, sibling);
}