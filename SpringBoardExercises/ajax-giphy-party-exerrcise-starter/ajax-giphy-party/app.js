console.log("Let's get this party started!");

//--- Global Variables ---//
const firstColumn = document.querySelector("#first-column");
const secondColumn = document.querySelector("#second-column");
const thirdColumn = document.querySelector("#third-column");
const fourthColumn = document.querySelector("#fourth-column");
let columnCounter = 1;


//--- Class Functions ---//
function storeHTMLElements() {
    localStorage.setItem("columnCount", columnCounter);
    localStorage.setItem("firstColumn", firstColumn.innerHTML);
    localStorage.setItem("secondColumn", secondColumn.innerHTML);
    localStorage.setItem("thirdColumn", thirdColumn.innerHTML);
    localStorage.setItem("fourthColumn", fourthColumn.innerHTML);
}

function displayHTMLElements() {
    columnCounter = localStorage.getItem("columnCount");
    firstColumn.innerHTML = localStorage.getItem("firstColumn");
    secondColumn.innerHTML = localStorage.getItem("secondColumn");
    thirdColumn.innerHTML = localStorage.getItem("thirdColumn");
    fourthColumn.innerHTML = localStorage.getItem("fourthColumn");
}

function clearHTMLElements() {
    localStorage.clear();
}

async function getGiphByInput(input) {
    try{
        const newUrl = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
        const req = await axios.get(newUrl);
        const randomNum = Math.floor(Math.random() * req.data.data.length) + 1;
        const selected = req.data.data[randomNum];
        renderGiph(selected.images.original.url);
        storeHTMLElements();
        //console.log(selected.images.original.url);
    } catch(e) {
        console.log(e);
        alert("Giph not found");
    }
}

function renderGiph(giph) {
    //Column div
    let nextColumn = organizeGiphPerColumns();
    const div = document.querySelector(`#${nextColumn}`);
    //Container div
    const newDiv = document.createElement("div");
    newDiv.className = "conatiner m-1";
    //Img
    const img = document.createElement("img");
    img.src = giph;
    img.className = "img-fluid";

    newDiv.append(img);
    div.append(newDiv);
}

function organizeGiphPerColumns() {
    let column;
    if(columnCounter % 4 === 1) {
        column = "first-column";
    } 
    else if(columnCounter % 4 === 2) {
        column = "second-column";
    }
    else if(columnCounter % 4 === 3) {
        column = "third-column";
    } 
    else if(columnCounter % 4 === 0) {
        column = "fourth-column";
    }

    columnCounter++;
    return column;
}

function clearGiphColumns() {
    firstColumn.innerHTML = "";
    secondColumn.innerHTML = "";
    thirdColumn.innerHTML = "";
    fourthColumn.innerHTML = "";
    columnCounter = 1;
    clearHTMLElements();
}

function init() {
    if(localStorage.getItem("firstColumn") === null) {
        storeHTMLElements();
    }

    //--- Class Attributes ---//
    const form = document.querySelector("#search-form");
    const input = document.querySelector("#search");
    const searchBtn = document.querySelector("#search-btn");
    const removeBtn = document.querySelector("#delete-btn");

    //--- Member Functions ---//
    function executeApp(e) {
        e.preventDefault();
        getGiphByInput(input.value);
        input.value = "";
    }

    //--- Events ---//
    form.addEventListener("submit", (e) => executeApp(e));
    searchBtn.addEventListener("click", (e) =>executeApp(e));
    removeBtn.addEventListener("click", clearGiphColumns);
    displayHTMLElements();
}

document.addEventListener("DOMContentLoaded", init);