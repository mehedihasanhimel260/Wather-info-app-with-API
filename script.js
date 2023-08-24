document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "8dce7afd903c98da0e0f08f3475c6b44"; // Replace with your OpenWeatherMap API key
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const cityInput = document.getElementById("cityInput");
    const weatherInfo = document.getElementById("weatherInfo");

    getWeatherBtn.addEventListener("click", () => {
        const cityName = cityInput.value.trim();

        if (cityName !== "") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    const weatherDescription = data.weather[0].description;
                    const temperature = (data.main.temp - 273.15).toFixed(2); // Convert to Celsius

                    weatherInfo.innerHTML = `
                        <h2>Weather in ${cityName}</h2>
                        <p><strong>Temperature:</strong> ${temperature} °C</p>
                        <p><strong>Description:</strong> ${weatherDescription}</p>
                    `;
                })
                .catch(error => {
                    weatherInfo.innerHTML = "<p>Error fetching weather data.</p>";
                });
        } else {
            weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
        }
    });
});
