import getDayData from "./getDayData"

export default function getMaxMinTemp(weeklyWeatherForecast){
    const currentDay = getDayData()[0]
    const temps = []
    const daysWeather = weeklyWeatherForecast.filter((item) => Number(item.dt_txt[8]+item.dt_txt[9]) !== currentDay)
    let maxTemp=daysWeather[0].main.temp_max
    let minTemp=daysWeather[0].main.temp_min
    let day = ''

    for(let i = 1; i < daysWeather.length; i++){
        
        if(daysWeather[i].dt_txt[8]+daysWeather[i].dt_txt[9] === daysWeather[i-1].dt_txt[8]+daysWeather[i-1].dt_txt[9]){ // check whether is same day
            if(i === daysWeather.length-1){
                maxTemp= daysWeather[i].main.temp_max >= daysWeather[i-1].main.temp_max ? maxTemp >= daysWeather[i].main.temp_max ? maxTemp : daysWeather[i].main.temp_max : maxTemp >= daysWeather[i-1].main.temp_max ? maxTemp : daysWeather[i-1].main.temp_max
                minTemp= daysWeather[i].main.temp_min <= daysWeather[i-1].main.temp_min ? minTemp <= daysWeather[i].main.temp_min ? minTemp : daysWeather[i].main.temp_min : minTemp <= daysWeather[i-1].main.temp_min ? minTemp : daysWeather[i-1].main.temp_min
                day = daysWeather[i].dt_txt[8]+daysWeather[i].dt_txt[9]
                temps.push({maxTemp,minTemp,day})
            }
            else{maxTemp= daysWeather[i].main.temp_max >= daysWeather[i-1].main.temp_max ? maxTemp >= daysWeather[i].main.temp_max ? maxTemp : daysWeather[i].main.temp_max : maxTemp >= daysWeather[i-1].main.temp_max ? maxTemp : daysWeather[i-1].main.temp_max
                 minTemp= daysWeather[i].main.temp_min <= daysWeather[i-1].main.temp_min ? minTemp <= daysWeather[i].main.temp_min ? minTemp : daysWeather[i].main.temp_min : minTemp <= daysWeather[i-1].main.temp_min ? minTemp : daysWeather[i-1].main.temp_min  
            }
        }
        else if(daysWeather[i].dt_txt[8]+daysWeather[i].dt_txt[9] !== daysWeather[i-1].dt_txt[8]+daysWeather[i-1].dt_txt[9] && i === daysWeather.length-1){
            day = daysWeather[i-1].dt_txt[8]+daysWeather[i-1].dt_txt[9]
            temps.push({maxTemp,minTemp,day})
            day  = daysWeather[i].dt_txt[8]+daysWeather[i].dt_txt[9]
            maxTemp=daysWeather[i].main.temp_max
            minTemp=daysWeather[i].main.temp_min
            temps.push({maxTemp,minTemp,day})
        }
        else if(daysWeather[i].dt_txt[8]+daysWeather[i].dt_txt[9] !== daysWeather[i-1].dt_txt[8]+daysWeather[i-1].dt_txt[9]){
            day = daysWeather[i-1].dt_txt[8]+daysWeather[i-1].dt_txt[9]
            temps.push({maxTemp,minTemp,day})
            maxTemp=daysWeather[i].main.temp_max
            minTemp=daysWeather[i].main.temp_min
        }
    } 
   return temps

}

