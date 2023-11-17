function cityURLhelsinki() {
    const APIkey = "94295a34c9a52d06656a4dbb0881be6f";
    const city = "Helsinki, FI";
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city},{+358}&appid=${APIkey}&units=metric`
    fetch(queryURL)
    .then((response)=>response.json()).then(
        (data)=>{
            const weatherInfo = document.getElementById("weather-info");
            const description = data.weather[0].description;
            const temperature = data.main.temp;
            const visibility = data.visibility;
            const clouds = data.clouds.all;
            const weatherhtml = `<div>
                <h1>Description: ${description}</h1>
                <h1>Temperature: ${Math.round(temperature)}°C, feels like ${Math.round(data.main.feels_like)}°C</h1>
                <h1>Visibility: ${visibility}m</h1>
                <h1>Clouds: ${clouds}kpl</h1>
            </div>`;
            weatherInfo.style.display = 'block';
            weatherInfo.innerHTML = weatherhtml;
           
            }
    ).catch((error)=>{console.error("Get pyyntö ei onnistunut :(",error)
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.style.display = 'none';
    });
}

