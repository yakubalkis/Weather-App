import getDayData from "./getDayData"

export default function getCurrentDescription(weeklyWeatherForecast){

    const currentDay = getDayData()[0]
    const currentHour = getDayData()[2]
    const daysWeather = weeklyWeatherForecast.filter((item) => Number(item.dt_txt[8]+item.dt_txt[9]) !== currentDay)
  
    const weatherData = []
    console.log(daysWeather)
    for(let i = 1; i < daysWeather.length; i++){  
        const hour1 = Number(daysWeather[i].dt_txt[11]+daysWeather[i].dt_txt[12])
        const hour2 = Number(daysWeather[i-1].dt_txt[11]+daysWeather[i-1].dt_txt[12])
        
        if(currentHour===0 && hour1===0){
            weatherData.push(daysWeather[i])
        }
        else if(i === daysWeather.length -1){
            weatherData.push(daysWeather[i])
        }
        else if(currentHour >= 21  && hour1===21 && i !== daysWeather.length-1){
            const data = hour1 - currentHour > currentHour - hour2 ? daysWeather[i-1] : daysWeather[i]
            weatherData.push(data)
        }
        else if(hour1 >= currentHour && currentHour > hour2 ){
            const data = hour1 - currentHour > currentHour - hour2 ? daysWeather[i-1] : daysWeather[i]
            weatherData.push(data)
        }
    } 
    console.log(weatherData)
   return weatherData
    
}  