function init() {
    const removeBtns = document.querySelectorAll("li button");
    const form = document.querySelector("#add-friend");
    const input = document.querySelector("#first-name");
    const friendList = document.querySelector("#friend-list");

    for(let btn of removeBtns) {
        btn.addEventListener("click", function(e) {
            //console.log("Friend romoved: " + e.target.parentElement.textContent);
            e.target.parentElement.remove();
        });
    };

    //Adding listeners - Inefficient
    /*
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const newFriend = document.createElement("li");
        const removeBtn = document.createElement("button");

        removeBtn.innerText = "UnFriend";
        removeBtn.addEventListener("click", function(event) {
            event.target.parentElement.remove();
        })
        newFriend.innerText = input.value;
        newFriend.appendChild(removeBtn);
        input.value = "";
        friendList.appendChild(newFriend);
    });
    */
   
    //Delegation - Efficient
    friendList.addEventListener("click", function(e) {
        //console.log(e.target.tagName);
        if(e.target.tagName.toLowerCase() === "button") {
            e.target.parentElement.remove();
        } else if(e.target.tagName.toLowerCase() === "li") {
            //console.log("clicked an <li>");
            e.target.classList.add("best-friend");
            const heart = document.createElement("span");
            heart.innerHTML = "&hearts;";
            e.target.prepend(heart);
        }
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const newFriend = document.createElement("li");
        const removeBtn = document.createElement("button");

        removeBtn.innerText = "UnFriend";
        newFriend.innerText = input.value;
        newFriend.appendChild(removeBtn);
        input.value = "";
        friendList.appendChild(newFriend);
    });
}

document.addEventListener("DOMContentLoaded", init)