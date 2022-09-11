import getDayData from "./getDayData"


export default function getPopupData(weeklyWeatherForecast,day){
    const currentHour = getDayData()[2]
    const weatherDataOfDay = weeklyWeatherForecast.filter((item) => Number(item.dt_txt[8]+item.dt_txt[9]) === day)
    console.log(weatherDataOfDay)
    let currentWeatherData= weatherDataOfDay[weatherDataOfDay.length-1] // if data not found in current hour

    for(let i = 1; i < weatherDataOfDay.length; i++){
        const hour1 = Number(weatherDataOfDay[i].dt_txt[11]+weatherDataOfDay[i].dt_txt[12])
        const hour2 = Number(weatherDataOfDay[i-1].dt_txt[11]+weatherDataOfDay[i-1].dt_txt[12])
        
        if(hour1 >= currentHour && currentHour >= hour2 ){
           currentWeatherData = hour1 - currentHour > currentHour - hour2 ? weatherDataOfDay[i-1]: weatherDataOfDay[i]
        }
    } 
    return currentWeatherData
}
