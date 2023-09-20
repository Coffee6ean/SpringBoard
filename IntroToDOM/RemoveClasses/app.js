const newTodo = document.createElement("li");
const boldText = document.createElement("b");
const ul = document.querySelector("ul");
boldText.textContent = "DON'T FORGET TO LOCK THE COOP!";
newTodo.classList = "todo"
newTodo.append(boldText);

const secondTodo = document.createElement("li");
secondTodo.textContent = "Order more la croix";
secondTodo.className = "todo"

ul.append(newTodo, secondTodo);

const thirdTodo = document.createElement("li");
//thirdTodo.classList = "todo";
thirdTodo.textContent = "Feed the Cats";
ul.prepend(thirdTodo)

const newImg = document.createElement("img");
newImg.classList.add("thumbnail")
newImg.setAttribute("src", "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
document.body.prepend(newImg);

// Remove Elements
/*
const removeMe = document.querySelector("#remove-me");
ul.removeChild(removeMe)
*/
const removeMe = document.querySelector("#remove-me");
removeMe.remove();
/*
const h1 = document.querySelector("h1");
h1.remove()
*/
