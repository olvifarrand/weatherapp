// 94295a34c9a52d06656a4dbb0881be6f     skymoodsig
var APIkey = "94295a34c9a52d06656a4dbb0881be6f";

var city1 = "Helsinki";
var city2 = "Tampere";
var city3 = "Vantaa";
var city4 = "Lahti";
var city5 = "Oulu";

// https://kartta.com/koordinaatit-kartalla/fi/helsinki/

var queryURL1 = `https://api.openweathermap.org/data/2.5/weather?q=${city1},{+358}&appid=${APIkey}`
var queryURL2 = `https://api.openweathermap.org/data/2.5/weather?q=${city2},{+358}&appid=${APIkey}`
var queryURL3 = `https://api.openweathermap.org/data/2.5/weather?q=${city3},{+358}&appid=${APIkey}`
var queryURL4 = `https://api.openweathermap.org/data/2.5/weather?q=${city4},{+358}&appid=${APIkey}`
var queryURL5 = `https://api.openweathermap.org/data/2.5/weather?q=${city5},{+358}&appid=${APIkey}`

async function cityURLhommat() {
    const response = await fetch(queryURL1);
    const info = await response.json();
    console.log(info);
}