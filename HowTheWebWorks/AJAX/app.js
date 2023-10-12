//--- XMLHttpRequest --//
const btn = document.querySelector("#swapi-btn");

btn.addEventListener("click", function() {
    const firstReq = new XMLHttpRequest();

    firstReq.addEventListener("load", function() {
        const data = JSON.parse(this.responseText);
        console.log(data);
        /*
        for(let planet of data.results) {
            console.log(planet['name']);
        }
        */

        //Nesting Requests
        const nextUrl = data.next;
        const secondReq = new XMLHttpRequest();

        secondReq.addEventListener("load", function() {
            console.log("Success");
            const data = JSON.parse(this.responseText);
            console.log(data);
        });

        secondReq.addEventListener("error", function() {
            console.log("Error");
        });

        secondReq.open("GET", nextUrl);
        secondReq.send();
        console.log("JUST SENT 2nd REQ...")
    });

    firstReq.addEventListener("error", () => {
        console.log("Error!!!!");
    });

    firstReq.open("GET", "https://swapi.dev/api/planets/");
    firstReq.send();
    console.log("SENDING REQUEST...");
});


//AJAX with Axios 
