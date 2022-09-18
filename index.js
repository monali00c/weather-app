let weather = {
    apikey: "b2f9ba803d6d6185f4ef0e2e8034bb15",
    fetchWeather: function (city) {
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="
           + city
           + "&units=metric&appid="
           + this.apikey
        )
        .then((response) => {
            if (!response.ok) {
                alert("No weather found");
                throw new error ("No weather found");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
       const {name} = data;
       const {icon, description} = data.weather[0];
       const {temp, humidity} = data.main;
       const {speed} = data.wind;
       console.log(name,icon,description,temp,humidity,speed)
       document.querySelector(".city").innerText = "Weather Forcast " + name;
       document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
       document.querySelector(".description").innerText = description;
       document.querySelector(".temp").innerText = temp + "°C";
       document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
        document.querySelector(".information").classList.remove("loading");
    },
search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
},
};
document.querySelector(".search button")
.addEventListener("click", function(){
 weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
    // return true;
  });
weather.fetchWeather("Siliguri");