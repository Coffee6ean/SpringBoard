/*--- Recreating Axios ---*/

let url = "https://swapi.dev/api/planets/";
let planet;

// XHR Request
/*
const request = new XMLHttpRequest();

request.onload = function () {
    if(request.readyState !== 4) return;

    // Chack status code
    if(request.status >= 200 && request.status < 300) {
        console.log("It worked", request);
    } else {
        console.log("Error");
    }
}

request.onerror = function handleError() {
    console.log("Network Error");
    request = null;
}

request.open('GET', url);

// Send it
request.send()
*/

// Our version of Axios
function get(url) {
    const request = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
        request.onload = function () {
            if(request.readyState !== 4) return;
        
            // Chack status code
            if(request.status >= 200 && request.status < 300) {
                resolve({
                    data: JSON.parse(request.response),
                    status: request.status,
                    request: request,
                    headers: request.getAllResponseHeaders()
                });
            } else {
                reject({
                    msg: 'Server Error',
                    status: request.status,
                    request: request
                });
            }
        }

        request.onerror = function handleError() {
            request = null;
            reject({
                msg: "NETWORK ERROR"
            });
        }

        request.open('GET', url);
        request.send();
    });
}

get(`${url}/1/`)
    .then(res => {
        console.log(res);
        return get(`${url}/2/`);
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
