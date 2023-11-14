// 94295a34c9a52d06656a4dbb0881be6f     skymoodsig

async function cityURLhommat() {
    const APIkey = "94295a34c9a52d06656a4dbb0881be6f";

    const city1 = "Helsinki";
    const city2 = "Tampere";
    const city3 = "Vantaa";
    const city4 = "Lahti";
    const city5 = "Oulu";

    const queryURL1 = `https://api.openweathermap.org/data/2.5/weather?q=${city1},{+358}&appid=${APIkey}`
    const queryURL2 = `https://api.openweathermap.org/data/2.5/weather?q=${city2},{+358}&appid=${APIkey}`
    const queryURL3 = `https://api.openweathermap.org/data/2.5/weather?q=${city3},{+358}&appid=${APIkey}`
    const queryURL4 = `https://api.openweathermap.org/data/2.5/weather?q=${city4},{+358}&appid=${APIkey}`
    const queryURL5 = `https://api.openweathermap.org/data/2.5/weather?q=${city5},{+358}&appid=${APIkey}`
    
    const response = await fetch(queryURL1);
    const info = await response.json();
    console.log(info);
}