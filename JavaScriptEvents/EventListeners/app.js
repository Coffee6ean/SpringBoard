function makeBody(color) {
    const body = document.querySelector("body");
    body.style.backgroundColor = color;
}

//--- JS event listener ---//
const tealBtn = document.querySelector("#teal");
tealBtn.onclick = function() {
     makeBody('teal');
}

const h1 = document.querySelector("h1");
/*
tealBtn.onclick = function() {
    h1.style.color = "cyan";
}
*/

//--- addEventListener ---//
const pinkBtn = document.querySelector("#pink");
pinkBtn.addEventListener("click", function() {
    makeBody("pink");
    //h1.style.color = "cyan";
})

pinkBtn.addEventListener("click", function() {
    h1.style.color = "cyan";
})


