/*

let currentWeather = {
    apiKey: "cf24836904b630625a0cf302dfe09cac", 
    fetchWeather: function (city){
       fetch(
       "https://api.openweathermap.org/data/2.5/weather?q=" 
       + city 
       + "&appid=" 
       +this.apiKey
       )
       .then((Response) => Response.json())
       .then ((data) => console.log(data))
    
    
    },


    displayWeather: function (data){
       const {name} = data
       const {icon, description} = data.weather[0]
       const {temp, humidity} = data.main 
       const {speed} = data.wind
       console.log(name, icon, description, temp, humidity, speed)
       
       
       document.querySelector(".city").innerText = "Weather in " + name
       document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
       document.querySelector(".description").innerText = description
       document.querySelector(".temp").innerText = temp
       document.querySelector(".humidity").innerText = "humidity " + humidity + "%"
      
      
    document.querySelector('.wind').innerText = "wind speed" + speed + "km/h"
} 

}

currentWeather.fetchWeather("Seoul")

*/

let weekforecast = {
   apiKey: "cf24836904b630625a0cf302dfe09cac", 
    fetchWeather: function () {
      fetch
      ("https://api.openweathermap.org/data/2.5/onecall?lat=27.95&lon=82.45&exclude=currently,minutely,hourly&appid=cf24836904b630625a0cf302dfe09cac&units=imperial"
    ).then((Response) => Response.json())
    .then ((data) => this.displayWeather(data))
 },
   



   displayWeather: function (data){
      const {name} = data
      
      const dailyData = data.daily
      const icons = []

     

     let highTemps = []
     let lowTemps = []
     let weather = []
     let description = []

         for (let i = 0; i < dailyData.length; i++) {
          highTemps.push(dailyData[i].temp.max)
      }
 
      for (let i = 0; i < dailyData.length; i++) {
         lowTemps.push(dailyData[i].temp.min)
     }

     for (let i = 0; i < dailyData.length; i++) {
      weather.push(dailyData[i].weather[0])
  }

  for (let i = 0; i < dailyData.length; i++) {
   description.push(dailyData[i].weather[0].description)
}


let imageDivs = document.getElementsByClassName("image")

for (let i = 0; i < dailyData.length; i++) {
   icons.push(dailyData[i].weather[0].icon)

}
console.log(icons)

for (let i = 0; i < imageDivs.length; i++) {
   

   imageDivs[i].src = "http://openweathermap.org/img/wn/" + icons[i] + "@2x.png"
   console.log(icons[i])
   
}

     let highsandlows = document.getElementsByClassName("highandlow")
     let descriptionDiv = document.getElementsByClassName("description")
    
 
       const insertHighsandLows = () => {
         for (let i = 0; i < highsandlows.length; i++) {
     
            highsandlows[i].textContent = " Low " + lowTemps[i] + "/  " + " High " + highTemps[i]
       }
   

       }

insertHighsandLows()

      const insertDescription = ( )=> {
         for (let i = 0; i < descriptionDiv.length; i++) {
           descriptionDiv[i].textContent = description[i]
      }
   }

insertDescription()


}

   
}




  weekforecast.fetchWeather()

  


