const apikey = "2c4b033780c7ab07b5ffea91148b2746";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function weatherreport(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
     else {

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        let weatherCondition = data.weather[0].main.toLowerCase();

        if (weatherCondition === "clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (weatherCondition == "clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if (weatherCondition === "drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (weatherCondition === "mist") {
            weatherIcon.src = "images/mist.png"
        }
        else if (weatherCondition === "rain") {
            weatherIcon.src = "images/rain.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}
searchbtn.addEventListener("click", () => {

    weatherreport(searchbox.value);
})

