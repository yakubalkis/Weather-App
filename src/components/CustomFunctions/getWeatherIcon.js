import iconSun from '../img/icon-sun.png'
import iconCold from '../img/icon-cold.png'
import iconFewClouds from '../img/icon-few-clouds.png'
import iconOvercastClouds from '../img/icon-overcast-clouds.png'
import iconScatteredClouds from '../img/icon-scattered-clouds.png'
import iconBrokenClouds from '../img/broken-clouds.png'
import iconLightRain from '../img/icon-light-rain.png'

export default function getWeatherIcon(weatherState, temp){
    if(weatherState==='few clouds'){
        return iconFewClouds
    }
    else if(weatherState==='clear sky'){
        if(temp <= 10){
            return iconCold
        }else{return iconSun}
    }
    else if(weatherState==='scattered clouds'){return iconScatteredClouds}
    else if(weatherState==='overcast clouds'){return iconOvercastClouds}
    else if(weatherState==='broken clouds'){return iconBrokenClouds}
    else if(weatherState==='light rain'){return iconLightRain}
    else return iconSun
}
