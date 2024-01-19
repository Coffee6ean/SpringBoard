function reportWindowSize() {
    const x = window.innerWidth;
    const y = window.innerHeight;

    const screenX = document.querySelector("#width");
    const screenY = document.querySelector("#height");

    screenX.textContent = x;
    screenY.textContent = y;

    return [x, y];
}

//--- Coloring Methods ---//
function changeGreen(x, y) {
    const unitaryV = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 1720;
    const g = unitaryV * 255;
    return g;
}

function changeColors(green, arr) {
    const r = Math.floor((arr[0]/1528)*255);
    const b = Math.floor((arr[1]/750)*255);
    if(green === 0) {
        var g = 0;
    } else {
        var g = green;
    }
    
    return `rgb(${r}, ${g}, ${b})`;
}

//--- Init ---//
function init() {

    addEventListener("resize", function() {
        const purples = reportWindowSize();
        
        this.document.body.style.backgroundColor = changeColors(0, purples);
    });

    document.addEventListener("mousemove", function(event) {
        const body = document.querySelector("body");
        console.log("movement X: " + event.pageX);
        console.log("movement Y: " + event.pageY);

        //console.log("Testing testing: " + body.style.backgroundColor.valueOf());
        const result = `rgb(${0}, ${changeGreen(event.pageX, event.pageY)}, ${0})`;
        body.style.backgroundColor = result;
    });
}

//--- Main function ---//
document.addEventListener("DOMContentLoaded", init)