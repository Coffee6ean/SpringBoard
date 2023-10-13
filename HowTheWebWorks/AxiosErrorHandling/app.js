async function getRandomDog() {
    const req = await axios.get("https://dog.ceo/api/breeds/image/random");
    const img = document.querySelector("#dog");
    console.log(req.data);
    img.src = req.data.message;
}

async function getDogByBreed(breed) {
    try {
        const newUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
        const req = await axios.get(newUrl);
        const img = document.querySelector("#dog");
        img.src = req.data.message;
        console.log(req);
    } catch(e) {
        console.log(e)
        alert("Breed Not Found");
        getRandomDog();
    }
}

const form = document.querySelector("#search-form");
const input = document.querySelector("#search");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    getDogByBreed(input.value);
    input.value = "";
})

