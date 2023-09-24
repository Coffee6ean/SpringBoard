//--- Global values ---//
const localStorageContent = localStorage.getItem("tasks");

var objectId = 1;
var tasks;

//Check localStorage before adding or removing anything  
if(localStorageContent === null) {
    tasks = [];
} else {
    tasks = JSON.parse(localStorageContent);
}

//--- Static Functions ---//
function getTaskStorage() {
    console.log(localStorage);
}

function clearTaskStorage() {
    localStorage.clear();
    tasks.splice(0, tasks.length);

    return true;
}

function addTask(element) {  
    const taskList = document.querySelector("#tasks");
    const taskElement = document.createElement("div"); 
    const taskContentElement = document.createElement("div");
    const taskContentDate = document.createElement("p");
    const taskContentInput = document.createElement("input");
    const taskActionsElement = document.createElement("div");
    const taskEditBtn = document.createElement("button");
    const taskDeleteBtn = document.createElement("button");
    const now = new Date();
    const nowJSON = now.toJSON();
    const object = {
        title: element,
        id: objectId++,
        date: nowJSON
    }
    tasks.push(object);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //--- Content ---//
    //div.task
    taskElement.classList.add("task");
    //div.content
    taskContentElement.classList.add("content");
    //task.content input
    taskContentInput.classList.add("text");
    taskContentInput.type = "text";
    taskContentInput.setAttribute("value", element);
    taskContentInput.setAttribute("readonly", "readonly");
    //div.content p
    taskContentDate.innerText = nowJSON;
    taskContentDate.className = "date";
    //--- Actions ---//
    taskActionsElement.classList.add("actions");
    taskEditBtn.classList.add("edit");
    taskEditBtn.innerHTML = "Edit";
    taskDeleteBtn.classList.add("delete");
    taskDeleteBtn.innerHTML = "Delete";

    taskActionsElement.appendChild(taskEditBtn);
    taskActionsElement.appendChild(taskDeleteBtn);
    taskContentElement.appendChild(taskActionsElement);
    taskContentElement.appendChild(taskContentInput);
    taskContentElement.appendChild(taskContentDate);
    taskElement.appendChild(taskContentElement);
    taskList.appendChild(taskElement);
    element.value = "";
} 

//Main
function init() {
    //--- Local values ---//
    const taskList = document.querySelector("#tasks");
    const form = document.querySelector("#new-task-form");
    const submit = document.querySelector("input[id='new-task-submit']");
    const input = document.querySelector("input[id='new-task-input']");
    const edit = document.querySelector("button.edit");
    
    //--- Member Functions ---//
    function storeHTMLElements() {
        localStorage.setItem("htmlData", taskList.innerHTML);
    }

    function displayHTMLElements() {
        taskList.innerHTML = localStorage.getItem("htmlData");
    }

    function removeTask(element) {
        element.parentElement.parentElement.parentElement.remove();
    }

    function editTask(element) {
        const taskContentInput = document.querySelector("#tasks input");
        if(element.outerText.toLowerCase() === "edit") {
            taskContentInput.removeAttribute("readonly");
            taskContentInput.focus();
            element.innerText = "Save";
        } else {
            taskContentInput.setAttribute("readonly", "readonly");
            element.innerText = "Edit";
        }
    }

    //--- Events ---//
    /*
     * Event that creates a task (<li> & <button>), saves the HTML
     * elements in a local key and creates a task - either a click 
     * or an "enter" in the form
     */
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if(input.value === "") {
            alert("Please enter a valid input. Expected a 'string' value");
        } else {
            addTask(input.value);
        }
        storeHTMLElements();
    });

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        if(input.value === "") {
            alert("Please enter a valid input. Expected a 'string' value");
        } else {
            addTask(input.value);
        }
        
        storeHTMLElements();
    });

    taskList.addEventListener("click", (e) => {
        e.preventDefault();
        if(e.target.tagName.toLowerCase() === "button") {
            (e.target.outerText.toLowerCase() === "delete") ? 
                removeTask(e.target) : editTask(e.target);
        }
        storeHTMLElements();
    });

    /*  
     * Event that listens for <button> 'clicks' witin out "this.taskList" so 
     * that we may remove the parent element - in this case <li>
     */
    taskList.addEventListener("click", function(e) {
        if(e.target.tagName.toLowerCase() === "button") {
            //removeTask(e.target.parentElement);
            storeHTMLElements();
        } else if(e.target.tagName.toLowerCase() === "li") {
            e.target.classList.toggle("completed");
            console.log(e.target.parentElement.innerHTML);
            storeHTMLElements();
        }
    });

    displayHTMLElements();
}

//Load Main
document.addEventListener("DOMContentLoaded", init)