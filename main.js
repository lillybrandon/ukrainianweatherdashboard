let weather = {
    apiKey: "791d782095d1952f551df2a3a3b6c954",
    fetchWeather: function () {
        fetch( "https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=791d782095d1952f551df2a3a3b6c954&units=metric&appid=791d782095d1952f551df2a3a3b6c954"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = (data);
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".kyiv").innerText = + temp;
        document.querySelector(".city__one--icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".city__one--description").innerText = description;
        document.querySelector(".city__one--temp").innerText = temp + "°C";
        document.querySelector(".city__one--humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".city__one--wind").innerText =
        "Wind speed: " + speed + " km/h";
    }
}


let weather2 = {
    apiKey: "791d782095d1952f551df2a3a3b6c954",
    fetchWeather: function () {
        fetch( "https://api.openweathermap.org/data/2.5/weather?q=kharkiv&appid=791d782095d1952f551df2a3a3b6c954&units=metric&appid=791d782095d1952f551df2a3a3b6c954"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = (data);
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".kharkiv").innerText = + temp;
        document.querySelector(".city__two--icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".city__two--description").innerText = description;
        document.querySelector(".city__two--temp").innerText = temp + "°C";
        document.querySelector(".city__two--humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".city__two--wind").innerText =
        "Wind speed: " + speed + " km/h";
    }
}

let weather3 = {
    apiKey: "791d782095d1952f551df2a3a3b6c954",
    fetchWeather: function () {
        fetch( "https://api.openweathermap.org/data/2.5/weather?q=odessa&appid=791d782095d1952f551df2a3a3b6c954&units=metric&appid=791d782095d1952f551df2a3a3b6c954"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = (data);
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".odessa").innerText = + temp;
        document.querySelector(".city__three--icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".city__three--description").innerText = description;
        document.querySelector(".city__three--temp").innerText = temp + "°C";
        document.querySelector(".city__three--humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".city__three--wind").innerText =
        "Wind speed: " + speed + " km/h";
    }
}

let weather4 = {
    apiKey: "791d782095d1952f551df2a3a3b6c954",
    fetchWeather: function () {
        fetch( "https://api.openweathermap.org/data/2.5/weather?q=donetsk&appid=791d782095d1952f551df2a3a3b6c954&units=metric&appid=791d782095d1952f551df2a3a3b6c954"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = (data);
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".donetsk").innerText = + temp;
        document.querySelector(".city__four--icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".city__four--description").innerText = description;
        document.querySelector(".city__four--temp").innerText = temp + "°C";
        document.querySelector(".city__four--humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".city__four--wind").innerText =
        "Wind speed: " + speed + " km/h";
    }
}

let weather5 = {
    apiKey: "791d782095d1952f551df2a3a3b6c954",
    fetchWeather: function () {
        fetch( "https://api.openweathermap.org/data/2.5/weather?q=dnipro&appid=791d782095d1952f551df2a3a3b6c954&units=metric&appid=791d782095d1952f551df2a3a3b6c954"
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = (data);
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".dnipro").innerText = + temp;
        document.querySelector(".city__five--icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".city__five--description").innerText = description;
        document.querySelector(".city__five--temp").innerText = temp + "°C";
        document.querySelector(".city__five--humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".city__five--wind").innerText =
        "Wind speed: " + speed + " km/h";
    }
}