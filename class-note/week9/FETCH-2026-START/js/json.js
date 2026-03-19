window.onload = goFetch;

// //function 可以同步进行
// async function goFetch() {

//     try {
//         //await 就是等他fetch了以后在进行下一步
//         let response = await fetch('./files/tests.json');
//         let parsedResultJS = await response.json();
//         console.log(parsedResultJS)
//         // let parsedResultJS = await response.text(); 可以只显示text
//         displayResults(parsedResultJS);
//     }
//     catch (err) {
//         console.log(err)
//         //catch only get called once it has an error
//     }
// }

// function displayResults(parsedResultJS) {
//     for (let i = 0; i < parsedResultJS.length; i++) {
//         //the object
//         let donutObj = parsedResultJS[i];
//         //container
//         let containerDiv = document.createElement("div");
//         containerDiv.classList.add("donutItem");
//         document.querySelector("#output").appendChild(containerDiv);

//         let title = document.createElement("h3");
//         title.textContent = donutObj.name;
//         containerDiv.appendChild(title)

//         //access the image
//         let donutImage = document.createElement("img");
//         donutImage.src = donutObj.image;
//         containerDiv.appendChild(donutImage)
//     }

// }

async function goFetch() {

    try {
        let urlA = `https://cataas.com/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square&json=true`
        let urlB = `https://cataas.com/cat?json=true`
        //
        let response = await fetch(urlB) //fetch == get the urlB
        let cat = await response.json();
        console.log(cat)
        displayOnSite(cat.url)
    }
    catch (err) {
        console.log(err);
    }

    function displayOnSite(path) {
        console.log(path)
        document.querySelector("#output").innerHTML += `<img style = "width:90%"src= ${path} />`
    }
}