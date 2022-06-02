

let weekforecast = {
   apiKey: "cf24836904b630625a0cf302dfe09cac", 
    fetchWeather: function (lat, lon) {
      fetch
      ("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=currently,minutely,hourly&appid=cf24836904b630625a0cf302dfe09cac&units=imperial"
    )
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => this.displayWeather(data));
},



   displayWeather: function (data){
    
      
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


for (let i = 0; i < imageDivs.length; i++) {
   

   imageDivs[i].src = "http://openweathermap.org/img/wn/" + icons[i] + "@2x.png"

   
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





let confirmButton = document.getElementsByClassName("confirmbutton")[0]

 confirmButton.addEventListener('click', function(){

   
   let location = document.getElementsByClassName("inputbox")[0].value

  
   const coordinatesToLocation = async () => {


      const response = await fetch ("http://api.openweathermap.org/geo/1.0/direct?q="+location+"&limit=1&appid=cf24836904b630625a0cf302dfe09cac")
         
         .then((response) => response.json())
         .then ((data) =>  weekforecast.fetchWeather(data[0].lat, data[0].lon ))
         
      

         let userText = document.getElementsByClassName("weeklyforecast")[0]
     
        userText.innerText = "7 Day Weather Forecast for " + location
        
       document.getElementsByClassName("inputbox")[0].value = ''
        
      
        }
        
        coordinatesToLocation()
       

})


  
  weekforecast.fetchWeather(27.95,-82.45)