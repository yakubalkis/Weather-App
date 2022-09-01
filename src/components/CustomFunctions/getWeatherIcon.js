import iconSun from '../img/icon-sun.png'
import iconCold from '../img/icon-cold.png'
import iconFewClouds from '../img/icon-few-clouds.png'
import iconOvercastClouds from '../img/icon-overcast-clouds.png'
import iconScatteredClouds from '../img/icon-scattered-clouds.png'

export default function getWeatherIcon(weatherState, temp){
    if(weatherState==='few clouds'){
        return iconFewClouds
    }
    else if(weatherState==='clear sky'){
        if(temp <= 15){
            return iconCold
        }else{return iconSun}
    }
    else if(weatherState==='scattered clouds'){return iconScatteredClouds}
    else if(weatherState==='overcast clouds'){return iconOvercastClouds}
    else return iconSun
}
