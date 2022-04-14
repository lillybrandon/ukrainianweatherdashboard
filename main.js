let weather = {
    apiKey: "23d1d98550e7ba39917485022c6515ec",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + "kyiv"
            + "&units=metric&appid=23d1d98550e7ba39917485022c6515ec"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = (data);
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".kyiv").innerText = "Current Weather " + temp;
        document.querySelector(".icon").src = "openweathermap.org/img/wn/" + icon + ".png ";
        document.querySelector(".Kharkiv").innerText = "Current Weather " + temp;
    }
}