import getDays from "./getDays"

export default function getMaxMinTemp(weeklyWeatherForecast){
    const currentDay = getDays()[0]
    const temps = []
    
    const daysWeather = weeklyWeatherForecast.filter((item) => item.dt_txt[8]+item.dt_txt[9] !== currentDay)
    let maxTemp=daysWeather[0].main.temp_max
    let minTemp=daysWeather[0].main.temp_min
    for(let i = 1; i < daysWeather.length; i++){
        
    
        if(daysWeather[i].dt_txt[8]+daysWeather[i].dt_txt[9] === daysWeather[i-1].dt_txt[8]+daysWeather[i-1].dt_txt[9]){ // check whether is same day
            maxTemp= daysWeather[i].main.temp_max >= daysWeather[i-1].main.temp_max ? maxTemp >= daysWeather[i].main.temp_max ? maxTemp : daysWeather[i].main.temp_max : maxTemp >= daysWeather[i-1].main.temp_max ? maxTemp : daysWeather[i-1].main.temp_max
            minTemp= daysWeather[i].main.temp_min <= daysWeather[i-1].main.temp_min ? minTemp <= daysWeather[i].main.temp_min ? minTemp : daysWeather[i].main.temp_min : minTemp <= daysWeather[i-1].main.temp_min ? minTemp : daysWeather[i-1].main.temp_min
        }
        else if(daysWeather[i].dt_txt[8]+daysWeather[i].dt_txt[9] !== daysWeather[i-1].dt_txt[8]+daysWeather[i-1].dt_txt[9]){
            temps.push({maxTemp,minTemp})
            maxTemp=daysWeather[i].main.temp_max
            minTemp=daysWeather[i].main.temp_min
        }

    } 
    console.log(daysWeather)
   
    console.log(temps)

    
    
}

