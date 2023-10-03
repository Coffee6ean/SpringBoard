function storeHTMLElements() {
    localStorage.setItem("htmlData", taskList.innerHTML);
}

function displayHTMLElements() {
    taskList.innerHTML = localStorage.getItem("htmlData");
} 

function init() {
    //--- Local variables ---//
    const form = document.querySelector("form");
    const topText = document.querySelector("input#top-text");
    const bottomText = document.querySelector("input#bottom-text");
    const imageLink = document.querySelector("input#image-link");
    const imgContainer = document.querySelector(".image-container");
    const sendBtn = document.querySelector("#send");
    const deleteBtn = document.querySelector("#delete");

    //--- Member Functions ---//
    function addTopText(string) {
        const div = document.createElement("div");
        div.className = "top-txt";
        div.innerText = string;
        topText.classList.remove("failed");

        imgContainer.prepend(div);
    }

    function addImgLink(string) {
        const img = document.createElement("img");
        img.setAttribute("src", string);
        imageLink.classList.remove("failed");

        imgContainer.append(img);
    }

    function addBotText(string) {
        const div = document.createElement("div");
        div.className = "bot-txt";
        div.innerText = string;
        bottomText.classList.remove("failed");

        imgContainer.append(div);
    }

    function fillForm(event) {
        event.preventDefault();
        
        let top = topText.value;
        let bot = bottomText.value;
        let lnk = imageLink.value;

        console.log(event.target)
        if(top === "") {
            topText.className = "failed";
        } else {
            addTopText(top);
        }
        if(lnk === "") {
            imageLink.className = "failed";
        } else {
            addImgLink(lnk);
        }
        if(bot === "") {
            bottomText.className = "failed";
        } else {
            addBotText(bot);
        }

        //setTimeout(clearForm, 500);
    }

    function clearForm() {
        topText.value = "";
        bottomText.value = "";
        imageLink.value = "";
        topText.classList.remove("failed");
        bottomText.classList.remove("failed");
        imageLink.classList.remove("failed");
    }

    function removeImage() {
        imgContainer.innerHTML = "";
    }

    //--- Events ---//
    form.addEventListener("submit", fillForm);
    sendBtn.addEventListener("click", fillForm);
    deleteBtn.addEventListener("click", (e) => {
        clearForm(e);
        removeImage();
    })
}

document.addEventListener("DOMContentLoaded", init);
