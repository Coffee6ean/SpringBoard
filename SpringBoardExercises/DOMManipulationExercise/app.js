/*
 * **Exercise**
 * Write the code necessary to do the following:
 */

//1. Select the section with an id of container without using querySelector.
var containerId = document.getElementById("container");
console.log(containerId);
console.log("-".repeat(10));

//2. Select the section with an id of container using querySelector.
var containerId = document.querySelector("section[id='container']")
console.log(containerId);
console.log("-".repeat(10));

//3. Select all of the list items with a class of “second”.
const itemSecond = document.querySelector("li.second");
console.log(itemSecond);
console.log("-".repeat(10));

//4. Select a list item with a class of third, but only the list item inside of the ol tag.
const ol = document.querySelector("ol");
console.log(ol.querySelector("li.third"));
console.log("-".repeat(10));

//5. Give the section with an id of container the text “Hello!”.
//containerId.innerText = "Hello"
const newText = document.createElement("span");
newText.textContent = "Hello!";
containerId.prepend(newText);
console.log(containerId);
console.log("-".repeat(10));

//6. Add the class main to the div with a class of footer.
const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");
console.log(footerDiv.classList);
console.log("-".repeat(10));

//7. Remove the class main on the div with a class of footer.
footerDiv.classList.remove("main");
console.log(footerDiv.classList);
console.log("-".repeat(10));

//8. Create a new li element.
const newLi = document.createElement("li");

//9. Give the li the text “four”.
newLi.textContent = "four";

//10. Append the li to the ul element.
const ul = document.querySelector("ul");
ul.append(newLi);
console.log(ul.children);
console.log("-".repeat(10));

//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olItems = document.querySelectorAll("ol");
for(let ol of olItems) {
    ol.style.background = "green";
}

//12. Remove the div with a class of footer
document.body.removeChild(footerDiv);
