// Declare variables and arrays to store data
let columnData; // To store the data for the current column
const promiseObjs = []; // Array to store promises for API requests

// Function to make an API request to jservice.io and return the response as a JSON string
async function getAPIResponse(randomId) {
    try {
        const url = `https://jservice.io/api/category?id=${randomId}.json`;
        const {id, title, clues_count, clues} = await axios.get(url).then((response) => response.data);
        const obj = {id, title, clues_count, clues};
        return JSON.stringify(obj);
    } catch(e) {
        console.log(e);
    }
}

// Function to get a random value based on a specified size (or a default size of 100)
function getRandomValue(size) {
    const result = (size === undefined) ? Math.floor(Math.random() * 100) + 1 : Math.floor(Math.random() * size) + 1;
    return result;
}

// Function to set the initial card value using data from the API
function setInitialCardValue(rowHTML, columnIdx) {
    // Get data from API response
    promiseObjs[columnIdx].then((response) => {
        const {id, title, clues_count, clues} = JSON.parse(response);
        columnData = {id, title, clues_count, clues};

        // Fill HTML with data extracted from API
        let randomClue = getRandomValue(clues_count);
        const clueTitle = columnData.title;
        const clueObj = JSON.stringify(columnData.clues[getRandomValue(clues_count)]);
        const cardId = rowHTML.id;

        if (cardId.includes("first")) {
            rowHTML.innerText = clueTitle;
        } else {
            rowHTML.setAttribute("value", clueObj);
            rowHTML.classList.add("value");
            rowHTML.innerText = JSON.parse(clueObj).value;
        }
    }).catch((other) => { console.log("Rejected: ", other) });
}

// Function to modify the card value on click
function modifyCardValue(card) {
    const cardValue = JSON.parse(card.getAttribute("value"));

    if (card.classList.contains("value")) {
        card.innerText = cardValue.question;
        card.classList.add("question");
        card.classList.remove("value");
    } else if (card.classList.contains("question")) {
        card.innerText = cardValue.answer;
        card.classList.add("answer");
        card.classList.remove("question");
    } else {
        return;
    }

    storeHTMLElements();
}

// Function to build data for all columns
function buildCardData() {
    for(let i = 0; i < 6; i++) {
        promiseObjs.push(getAPIResponse(getRandomValue()));
    }
}

// Function to start the application
function startApp() {
    const htmlBody = document.querySelector("#app-body");
    const columns = htmlBody.querySelectorAll(".col");
    let columnIdx = 0;

    buildCardData();
    for(let column of columns) {
        // Build array of columns
        const rows = column.children;
        // Triage Response to Columns
        for(let row of rows) {
            setInitialCardValue(row, columnIdx);
        }
        columnIdx++;
    }

    storeHTMLElements();
}

// Function to store the current HTML in local storage
function storeHTMLElements() {
    const htmlBody = document.querySelector("#app-body");
    localStorage.setItem("appHTML", htmlBody.innerHTML);
}

// Function to display the HTML from local storage
function displayHTMLElements() {
    const htmlBody = document.querySelector("#app-body");
    htmlBody.innerHTML = localStorage.getItem("appHTML");
}

// Function to initialize the application and add event listeners
function init() {
    // Attributes
    const htmlHeader = document.querySelector("#app-header");
    const htmlBody = document.querySelector("#app-body");
    const cards = htmlBody.querySelector(".row");
    const replayBtn = htmlHeader.querySelector("#replay")

    // Initialize App
    if(localStorage.getItem("appHTML") !== null) {
        startApp();
    } else {
        displayHTMLElements();
    }

    // Events
    cards.addEventListener("click", (event) => {
        const element = event.target;
        const column = "#" + element.parentElement.id;
        const row = "#" + element.id;
        const card = htmlBody.querySelector(column).querySelector(row);

        if (!(element.id.includes("first"))) {
            modifyCardValue(card);
        }
    });

    replayBtn.addEventListener("click", () => {
        localStorage.clear();
        startApp();
    });
}

// Add an event listener to run the initialization when the DOM is ready
document.addEventListener("DOMContentLoaded", init);
