import getDayData from "./getDayData"


export default function getPopupData(weeklyWeatherForecast,day){
    const currentHour = getDayData()[2]
    const weatherDataOfDay = weeklyWeatherForecast.filter((item) => Number(item.dt_txt[8]+item.dt_txt[9]) === day)
    
    let currentWeatherData= weatherDataOfDay[weatherDataOfDay.length-1] // if data not found in current hour

    for(let i = 1; i < weatherDataOfDay.length; i++){
        const hour1 = Number(weatherDataOfDay[i].dt_txt[11]+weatherDataOfDay[i].dt_txt[12])
        const hour2 = Number(weatherDataOfDay[i-1].dt_txt[11]+weatherDataOfDay[i-1].dt_txt[12])

        if(currentHour >= 21  && hour1===21 && i !== weatherDataOfDay.length-1){
            currentWeatherData = weatherDataOfDay[i]
        }
        else if(hour1 >= currentHour && currentHour > hour2 ){
            currentWeatherData = hour1 - currentHour > currentHour - hour2 ? weatherDataOfDay[i-1] : weatherDataOfDay[i]
        }
        else if(i === weatherDataOfDay.length -1){
           currentWeatherData = weatherDataOfDay[i]
        }
    }
    console.log(currentWeatherData)
    return currentWeatherData

//     for(let i = 1; i < daysWeather.length; i++){
//         const hour1 = daysWeather[i].dt_txt[11]+daysWeather[i].dt_txt[12] === '00' ? 24 : Number(daysWeather[i].dt_txt[11]+daysWeather[i].dt_txt[12])
//         const hour2 = daysWeather[i-1].dt_txt[11]+daysWeather[i-1].dt_txt[12] === '00' ? 24 : Number(daysWeather[i-1].dt_txt[11]+daysWeather[i-1].dt_txt[12])
        
        
//         if(hour1 >= currentHour && currentHour > hour2 ){
//             const description = hour1 - currentHour > currentHour - hour2 ? daysWeather[i-1].weather[0].description : daysWeather[i].weather[0].description
//             const currentTemp = hour1 - currentHour > currentHour - hour2 ? daysWeather[i-1].main.temp : daysWeather[i].main.temp
//             descriptionsAndTemps.push({description,currentTemp})
//         }
//         else if(i === daysWeather.length -1){
//             const description = daysWeather[i].weather[0].description
//             const currentTemp = daysWeather[i].main.temp
//             descriptionsAndTemps.push({description,currentTemp})
//         }
//     } 
//     console.log(descriptionsAndTemps)
//    return descriptionsAndTemps
    
}
