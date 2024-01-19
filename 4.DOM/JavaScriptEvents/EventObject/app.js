function init() {
    const p = document.querySelector("p")
    p.addEventListener("click", function(e) {
        console.log(e);
    })
    
    p.addEventListener("mousedown", function(e) {
        console.log(e.type);
    })

    p.addEventListener("mouseup", function(event) {
        console.log(event.type);
    })
}

document.addEventListener("DOMContentLoaded", init)