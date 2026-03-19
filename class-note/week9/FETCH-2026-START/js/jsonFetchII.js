window.onload = goApp;

async function goApp() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts"); //response
    let posts = await response.json();
    console.log(posts);
    for (let i = 0; i < 10; i++) {
      document.querySelector("#output_rev").innerHTML +=
        `POST ${i} title:  ${posts[i].title} <br>`
    }
  } catch (err) {
    console.log(err);
  }

}
