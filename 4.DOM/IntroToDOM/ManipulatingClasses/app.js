function toogleAllTodos() {
    const todos = document.querySelectorAll("li");

    for(let li of todos) {
        li.classList.toggle("completed")
    }
}

const h2 = document.querySelector("h2");
setInterval(function() {
    if(h2.classList.contains("big")) {
        h2.innerText = "SAD"
    } else {
        h2.innerText = "HAPPY"
    }
    h2.classList.toggle("big");   //Remove if it's there, add it if it's not
    h2.classList.toggle("small");
}, 1000)