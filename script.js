"use strict"
// cats

async function getCatFact() {
    try {
        const response = await fetch("https://api.cuturdic.com/cats");
        const catFacts = await response.json();
        let catFactEl = document.querySelector(".cat-description");
        catFactEl.innerText = catFacts["fact"];
    }
    catch (error) {
        console.log(error)
    }
}

getCatFact()

let catButton = document.querySelector(".cat-button");
catButton.addEventListener("click", function () {
    getCatFact();
});

// dogs

async function getDogFact() {
    try {
        const response = await fetch("https://api.cuturdic.com/dogs");
        const dogFacts = await response.json();
        let dogFactEl = document.querySelector(".dog-description");
        dogFactEl.innerText = dogFacts["fact"];
    }
    catch (error) {
        console.log(error)
    }
}

getDogFact()

let dogButton = document.querySelector(".dog-button");
dogButton.addEventListener("click", function () {
    getDogFact();
});
