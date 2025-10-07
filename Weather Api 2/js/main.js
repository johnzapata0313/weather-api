//worked with Justin Joshi and used YouTube video: https://www.youtube.com/watch?v=VaDUGPMjzOM
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "a5f0077af291bbf4b76151b6c177a1f4";
document.querySelector('button').addEventListener('click', getData)


async function getData() {
    const val = document.querySelector('input').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        
        const result = await response.json();
        
        document.querySelector('h2').innerText = `${((result.main.temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;

    } catch (error) {
        console.error(error.message);
    }
}



// function displayWeatherInfo(data) {

//     const { name: city,
//         main: { temp, humidity },
//         weather: [{ description, id }] } = data;

//     card.textContent = "";
//     card.style.display = "flex";

//     const cityDisplay = document.createElement("h1");
//     const tempDisplay = document.createElement("p");
//     const humidityDisplay = document.createElement("p");
//     const descDisplay = document.createElement("p");
//     const weatherDisplay = document.createElement("p");

//     cityDisplay.textContent = city;
//     tempDisplay.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`
//     humidityDisplay.classList.add(`Humidity: ${humidity}`);
//     descDisplay.textContext = description;
//     WeatherEmoji.textContent = getWeatherEmoji(id);

//     cityDisplay.classList.add("cityDisplay");
//     tempDisplay.classList.add("tempDisplay");
//     humidityDisplay.classList.add("humidityDisplay");
//     descDisplay.classList.add("descDisplay");
//     weatherEmoji.classList.add("weatherEmoji")

//     card.appendChild(cityDisplay);
//     card.appendChild(tempDisplay)
//     card.appendChild(humidityDisplay)
//     card.appendChild(descDisplay)
//     card.appendChild(weatherEmoji)
// }

// function getWeatherEmoji(weatherId) {

//     switch (true) {
//         case (weatherId >= 200 && weatherId < 300):
//             return "⛈️";
//         case (weatherId >= 300 && weatherId < 400):
//             return "🌨️";
//         case (weatherId >= 500 && weatherId < 600):
//             return "🌧️";
//         case (weatherId >= 600 && weatherId < 700):
//             return "❄️";
//         case (weatherId >= 700 && weatherId < 800):
//             return "🌫️";
//         case (weatherId === 800):
//             return "☀️";
//         case (weatherId >= 801 && weatherId < 810):
//             return "☁️";
//         default:
//             return "🤔"
//     }
// }

// function displayError(message) {

//     const errorDisplay = document.createElement("p");
//     errorDisplay.textContent = message;
//     errorDisplay.classList.add("errorDisplay")

//     card.textContent = ""
//     card.style.display = "flex"
//     card.appendChild(errorDisplay);
// }