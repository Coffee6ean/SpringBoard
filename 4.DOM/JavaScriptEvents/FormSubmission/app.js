function init() {
    const form = document.querySelector("#monkeyform");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("you submitted the form");
    });

    document.querySelector("a").addEventListener("click", function(event){
        event.preventDefault();
        console.log("No google for you")
    });

    document
    .querySelector("input[type='checkbox']")
    .addEventListener("click", function(e) {
        e.preventDefault();
        console.log("No checking the box")
    })
}

document.addEventListener("DOMContentLoaded", init)