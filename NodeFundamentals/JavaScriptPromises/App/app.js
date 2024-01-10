/*--- AJAX Promises ---*/ 

// JQuery => Callbacks and Nesting
/*
$.getJSON(url, response => {
    planet = response;
    console.log(planet);
    $.getJSON(planet.residents[0], response => {
        resident = response;
        console.log(resident);
        $.getJSON(resident.films[0], response => {
            film = response;
            console.log(film);
        }, err => {
            console.log(err)
        });
    }, err => {
        console.log(err)
    });
}, err => {
    console.log(err)
});
*/

// AXIOS => Promises
/*
let ourFirstPromise = axios.get(url);
ourFirstPromise.then(data => console.log(data));  // From Pending to Resolved
ourFirstPromise.catch(err => console.log("Rejected", err));  // From Pending to Rejected 
*/

// Promises Nesting Callback Methods
/*
axios.get(url)
    .then(res => {
        console.log(res);
        axios.get(res.data.residents[0])
            .then(res => console.log(res))
            .catch(err => console.log("Rejected", err))
    })
    .catch(err => console.log("Rejected", err));
*/

// Promises Chaining - Flatter Version
/*
axios.get(url)
    .then(res => {
        console.log("First Promise Resolved")
        console.log(res.data);
        return axios.get(res.data.residents[0])
    })
    .then(res => {
        console.log("Second Promise Resolved")
        console.log(res.data);
        return axios.get(res.data.films[0])
    })
    .then(res => {
        console.log("Third Promise Resolved")
        console.log(res.data);

    })
    .catch(err => console.log("Rejected", err));
*/

// Writing Promises 
/*
function wait3Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(reject, 3000);
    });
}

wait3Seconds()
    .then(() => console.log("All Done"))
    .catch(err => console.log("Error"));
*/


const h1 = document.querySelector('h1');
/*
setTimeout(function() {
    h1.style.color = 'red';
    setTimeout(() => {
        h1.style.color = 'orange';
        setTimeout(() => {
            h1.style.color = 'yellow';
            setTimeout(() => {
                h1.style.color = 'green';
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/

function changeColor(el, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el.style.color = color;
            resolve();
        }, 1000)
    })
}

changeColor(h1, 'red')
    .then(() => changeColor(h1, 'orange'))
    .then(() => changeColor(h1, 'yellow'))
    .then(() => changeColor(h1, 'green'))
    .then(() => changeColor(h1, 'blue'))
    .then(() => changeColor(h1, 'indigo'))
    .then(() => changeColor(h1, 'violet'))
