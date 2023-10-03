//--- Global variables ---//
const main = document.querySelector("main");
/*
//--- Class Functions ---//
function storeHTMLElements() {
    localStorage.setItem("htmlData", main.innerHTML);
}

function displayHTMLElements() {
    main.innerHTML = localStorage.getItem("htmlData");
} 
*/

function init() {
    //--- Local variables ---//
    const form = document.querySelector("form");
    const topText = document.querySelector("input#top-text");
    const bottomText = document.querySelector("input#bottom-text");
    const imageLink = document.querySelector("input#image-link");
    const imgContainer = document.querySelector(".image-container");
    const sendBtn = document.querySelector("#send");
    const deleteBtn = document.querySelector("#delete");
    var counter = 0;

    //--- Member Functions ---//
    function addTopText(string) {
        const div = document.createElement("div");
        div.className = "top-txt";
        div.innerText = string;
        topText.classList.remove("failed");
        topText.setAttribute("placeholder", "Text");

        imgContainer.prepend(div);
    }

    function addImgLink(string) {
        const img = document.createElement("img");
        img.setAttribute("src", string);
        imageLink.classList.remove("failed");
        imageLink.setAttribute("placeholder", "Link");

        imgContainer.append(img);
    }

    function addBotText(string) {
        const div = document.createElement("div");
        div.className = "bot-txt";
        div.innerText = string;
        bottomText.classList.remove("failed");
        bottomText.setAttribute("placeholder", "Text");

        imgContainer.append(div);
    }

    function removeImage() {
        imgContainer.innerHTML = "";
    }

    function rejectFormInput(obj) {
        obj.classList.add("failed"); 
        if(obj.id === "image-link") {
            obj.setAttribute("placeholder", "Add Link");
        } else {
            obj.setAttribute("placeholder", "Add Text");
        }
        counter = 0;
    }

    function fillForm(event) {
        event.preventDefault();
        
        let top = topText.value;
        let bot = bottomText.value;
        let lnk = imageLink.value;

        if(top === "") {
            rejectFormInput(topText);
            counter++;
        }
        if(lnk === "") {
            rejectFormInput(imageLink);
            counter++;
        } 
        if(bot === "") {
            rejectFormInput(bottomText);
            counter++;
        }

        if(counter === 0) {
            addTopText(top);
            addImgLink(lnk);
            addBotText(bot);
        }

        //storeHTMLElements();
        //setTimeout(clearForm, 500);
    }

    function clearForm() {
        counter = 0;
        topText.value = "";
        bottomText.value = "";
        imageLink.value = "";
        topText.classList.remove("failed");
        bottomText.classList.remove("failed");
        imageLink.classList.remove("failed");
        topText.setAttribute("placeholder", "Text");
        imageLink.setAttribute("placeholder", "Link");
        bottomText.setAttribute("placeholder", "Text");
        //storeHTMLElements();
    }

    //--- Events ---//
    form.addEventListener("submit", fillForm);
    sendBtn.addEventListener("click", fillForm);
    deleteBtn.addEventListener("click", (e) => {
        clearForm(e);
        removeImage();
    });
    //displayHTMLElements();
}

document.addEventListener("DOMContentLoaded", init);
