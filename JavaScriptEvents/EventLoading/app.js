function init() {
    //alert("DOM Content Loaded");
    
    console.log(document.querySelectorAll("img"))

    const btn = document.querySelector("button");

    btn.addEventListener("click", function() {
        console.log("Clicked!");
    });
    
}

//Method will render web page until everything has been loaded
/*
window.addEventListener("load", function() {
    console.log("FULLY LOADED");
})
*/

document.addEventListener("DOMContentLoaded", init)
