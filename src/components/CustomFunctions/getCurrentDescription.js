import getDays from "./getDays"

export default function getCurrentDescription(weeklyWeatherForecast){

    const currentDay = getDays()[0]
    const currentHour = getDays()[2]
    const daysWeather = weeklyWeatherForecast.filter((item) => Number(item.dt_txt[8]+item.dt_txt[9]) !== currentDay)
    const descriptionsAndTemps = []

    for(let i = 1; i < daysWeather.length; i++){
        const hour1 = Number(daysWeather[i].dt_txt[11]+daysWeather[i].dt_txt[12])
        const hour2 = Number(daysWeather[i-1].dt_txt[11]+daysWeather[i-1].dt_txt[12])
        
        if(hour1 >= currentHour && currentHour >= hour2 ){
            const description = hour1 - currentHour > currentHour - hour2 ? daysWeather[i-1].weather[0].description : daysWeather[i].weather[0].description
            const currentTemp = hour1 - currentHour > currentHour - hour2 ? daysWeather[i-1].main.temp : daysWeather[i].main.temp
            descriptionsAndTemps.push({description,currentTemp})
        }
        else if(i === daysWeather.length -1){
            const description = daysWeather[i].weather[0].description
            const currentTemp = daysWeather[i].main.temp
            descriptionsAndTemps.push({description,currentTemp})
        }
    } 
    
   return descriptionsAndTemps
    
}  