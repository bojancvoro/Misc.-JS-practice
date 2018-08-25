// app to show suggested city names as user types
// fetch city list, and filter it as user types, display filtered list

const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const allCities = [];
const inputElement = document.getElementsByTagName("input")[0];
const suggestionsElement = document.getElementById("matched-cities");

// fetch data and store it into global var allCities

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        allCities.push(...data);
    });

// find cities whose name includes string user typed

function findMatches(input, allCities) {
    return allCities.filter((city) => {
        return city.city.toLowerCase().includes(input);
    });
}

// display matched cities

function displayMatches(matches) {
    const html = matches.map((city) => {
        return `<li>${city.city}</li>`
    });
    suggestionsElement.innerHTML = html.join("");
}

// listen to input and run the above two functions accordingly

inputElement.addEventListener("keyup", (e) => {
    const mathces = findMatches(e.target.value, allCities);
    displayMatches(mathces);
});





