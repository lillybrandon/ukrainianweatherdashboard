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
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    }
}

let weather2 = {
    apiKey: "23d1d98550e7ba39917485022c6515ec",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + "kharkiv"
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
        document.querySelector(".kharkiv").innerText = "Current Weather " + temp;
        document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description__two").innerText = description;
        document.querySelector(".humidity__two").innerText = humidity;
    }
}

let weather3 = {
    apiKey: "23d1d98550e7ba39917485022c6515ec",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + "donetsk"
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
        document.querySelector(".donetsk").innerText = "Current Weather " + temp;
        document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    }
}


let weather4 = {
    apiKey: "23d1d98550e7ba39917485022c6515ec",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + "odessa"
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
        document.querySelector(".odessa").innerText = "Current Weather " + temp;
        document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    }
}


let weather5 = {
    apiKey: "23d1d98550e7ba39917485022c6515ec",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + "dnipro"
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
        document.querySelector(".dnipro").innerText = "Current Weather " + temp;
        document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    }
}