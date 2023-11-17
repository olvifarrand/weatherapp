async function cityURLvantaa() {
    const APIkey = "94295a34c9a52d06656a4dbb0881be6f";

    const city = "Vantaa, FI";

    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},{+358}&appid=${APIkey}`

    const response = await fetch(queryURL);
    const info = await response.json();
    console.log(info);
}
