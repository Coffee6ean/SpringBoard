const gameContainer = document.getElementById("game");
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

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function startGame() {
  createDivsForColors(shuffledColors);
  localStorage.setItem("dataHTML", gameContainer.innerHTML);
  gameContainer.innerHTML = localStorage.getItem("dataHTML");
}

function restartGame() {
  localStorage.clear();
  location.reload();
}

function storeHTMLElements() {
  localStorage.setItem("dataHTML", gameContainer.innerHTML);
}

function displayHTMLElements() {
  gameContainer.innerHTML = localStorage.getItem("dataHTML");
}

function test() {
  var result = false;
  console.log("result: " + result);
  setTimeout(function() {
    result = true;
    console.log("result: " + result);
  }, 5000)
}

function init() {
  if(localStorage.getItem("dataHTML") === null) {
    startGame();
  }
  
  //--- local Variables ---//
  const test = document.querySelector("div");
  var next = false;
  var reveal = 0;
  var pairsFound = 0;

  //--- Functions ---//
  function turnToWhite(event) {
    event.style.background = "white";
    event.classList.remove("find-match");
    reveal--;
  }

  function turnToColor(event) {
    event.style.background = event.className;
    event.classList.add("find-match");
    reveal++;
  }

  function resetCard(card) {
    setTimeout(function() {
      turnToWhite(document.querySelector(card));
    }, 1500); 

    return true;
  }

  function keepCards() {
    pairsFound++;
    //console.log("Great. Pair found: " + pairsFound);
    storeHTMLElements();

    return true;
  }

  function handleCardClick(event) {
    if(!event.target.className.includes("find-match")) {
      turnToColor(event.target)
    } else {
      turnToWhite(event.target);
    }

    return event.target.className;
  }

  function compareSelectedCards() {
    var cardOne = "." + cards[0].replace(" ", ".");
    var cardTwo = "." + cards[1].replace(" ", ".");
    if(cardOne == cardTwo) {
      next = keepCards();
    } else {
      resetCard(cardOne);
      next = resetCard(cardTwo);
    }

    cards = [];
  }

  function disableCardClick() {
    console.log("Click disabled");
    test.removeEventListener("click", (e) => {});
  }

  function enableCardClick() {
    test.addEventListener("click", (e) => {
      if(!(e.target.id === "game")) {
        let card = handleCardClick(e);
        cards.push(card);

        if(reveal % 2 == 0 && reveal > 0) {
          compareSelectedCards();
        }
      }
    });
  }

  //--- Events ---//
  if(pairsFound == COLORS.length/2) {
    alert("Congratulations, you won!!");
    setTimeout(function() {
      restartGame();
    }, 1500);
  }
  enableCardClick();
  displayHTMLElements();
}

// when the DOM loads
document.addEventListener("DOMContentLoaded", function() {
  init();
})





