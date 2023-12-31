//--- HTML: Game ---//
const htmlBody = document.querySelector("body");
const gameContainer = document.getElementById("game");
const homeContainer = document.getElementById("home");
var cards = [];
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

//Shuffle the COLORS array and store it in shuffledColors
function shuffle(array) {
  let counter = array.length;

  //While there are elements in the array
  while (counter > 0) {
    //Pick a random index
    let index = Math.floor(Math.random() * counter);

    //Decrease counter by 1
    counter--;

    //And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

//Create div elements for each color and add them to the game container
function createDivsForColors(colorArray) {
  const h1 = document.createElement('h1');
  h1.innerText = "Memory Game!";
  gameContainer.prepend(h1);
  for (let color of colorArray) {
    //create a new div
    const newDiv = document.createElement("div");
    //give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    //append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

//--- HTML: Landing Page ---//
function displayLandingPage() {
  const div = document.createElement("div")
  const h1 = document.createElement("h1");
  h1.innerText = "PLAY CARD-GAME";
  div.appendChild(h1);
  homeContainer.append(div);

  function playCardGame() {
    //Start Card-game
    localStorage.clear();
    h1.removeEventListener("click", playCardGame);
    init();
  }

  h1.addEventListener("click", playCardGame);
}
//--- JavaScript ---//
function storeHTMLElements() {
  localStorage.setItem("cardGameHTML", gameContainer.innerHTML);
}

function displayHTMLElements() {
  gameContainer.innerHTML = localStorage.getItem("cardGameHTML");
}

function startGame() {
  createDivsForColors(shuffledColors);
  //Store the current state in local storage
  storeHTMLElements();
  //Load the game state from local storage
  displayHTMLElements();
}

function restartGame() {
  localStorage.clear();
  location.reload();
}

function init() {
  if(localStorage.getItem("cardGameHTML") === null) {
    startGame();
  }
  
  //--- local Variables ---//
  const test = document.querySelector("div");
  var pairsFound = 0;

  //--- Functions ---//
  function turnToWhite(card) {
    card.style.background = "white";
    card.classList.remove("find-match");
  }

  function turnToColor(card) {
    card.style.background = card.className;
    card.classList.add("find-match");
  }

  function resetCards(cardOne, cardTwo) {
    setTimeout(function() {
      turnToWhite(document.querySelector(cardOne));
      turnToWhite(document.querySelector(cardTwo));
    }, 1500); 
  }

  function keepCards() {
    pairsFound++;
    //Store the current state in local storage
    storeHTMLElements();
  }
  
  function compareSelectedCards() {
    //Disable card clicks during comparison
    disableCardClick();
    var cardOne = "." + cards[0].replace(" ", ".");
    var cardTwo = "." + cards[1].replace(" ", ".");
    if(cardOne == cardTwo) {
      //If the cards match, keep them revealed
      keepCards();
    } else {
      //If they don't match, reset their colors
      resetCards(cardOne, cardTwo);
    }

    cards = [];
    //Re-enable card clicks after a delay
    setTimeout(enableCardClick, 1500);
  }

  //--- Events ---//
  function disableCardClick() {
    //Remove the event listener temporarily to disable card clicks
    test.removeEventListener("click", handleClick);
  }

  function enableCardClick() {
    //Re-add the event listener to enable card clicks
    test.addEventListener("click", handleClick);

    if(pairsFound == COLORS.length/2) {
      //If all pairs are found, display a message and restart the game
      alert("Congratulations, you won!!");
      setTimeout(function() {
        restartGame();
      }, 1500);
    }
  }

  function handleClick(event) {
    if (!event.target.className.includes("find-match")) {
      //If a card is clicked, reveal it
      turnToColor(event.target);
      cards.push(event.target.className);

      if (cards.length == 2) {
        //If two cards are revealed, compare them
        compareSelectedCards();
      }
    } else {
      //If a revealed card is clicked again, hide it
      turnToWhite(event.target);
      cards.pop();
    }
  }

  //Enable card clicks and display the game elements
  enableCardClick();
  displayHTMLElements();
}

//Initialize the game when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayLandingPage();
});
