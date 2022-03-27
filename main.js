let weather = {
    apiKey: "cf24836904b630625a0cf302dfe09cac", 
    fetchWeather: function (city){
       fetch(
       "https://api.openweathermap.org/data/2.5/weather?q=" 
       + city 
       + "&appid=" 
       +this.apiKey

       ).then((Response) => Response.json())
       .then ((data) => this.displayWeather(data))
    
    
    },

    displayWeather: function (data){
       const {name} = data
       const {icon, description} = data.weather[0]
       const {temp, humidity} = data.main 
       const {speed} = data.wind
       console.log(name, icon, description, temp, humidity, speed)
       document.querySelector(".city").innerText = "Weather in " + name
       document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
       document.querySelector(".description").innerText = description
       document.querySelector(".temp").innerText = temp
       document.querySelector(".humidity").innerText = "humidity " + humidity + "%"
       document.querySelector('.wind').innerText = "wind speed" + speed + "km/h"
} 

}

weather.fetchWeather("Seoul")