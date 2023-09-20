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
thirdTodo.textContent = "Feed the Cats";
ul.prepend(thirdTodo)

const newImg = document.createElement("img");
newImg.classList.add("thumbnail")
newImg.setAttribute("src", "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
document.body.prepend(newImg);

