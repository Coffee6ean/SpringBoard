function init() {
    /*
    document.addEventListener("keypress", function(e) {
        console.log("Key pressed: " + e.key);
    });
    */
    /*
    document.addEventListener("keydown", function(e) {
        console.log("Key pressed: " + e.key);
    });

    document.addEventListener("keyup", function(e) {
        console.log("Key pressed: " + e.key);
    });
    */

    document.querySelector("input").addEventListener("keydown", function(e) {
        console.log("Key down: ", e.key)
    })
}

document.addEventListener("DOMContentLoaded", init)