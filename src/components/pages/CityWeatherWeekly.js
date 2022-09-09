import React,{useState, useRef, useEffect} from "react"
import { connect } from "react-redux"
import { motion } from "framer-motion"
//import Cart from "../WeatherCarts/Cart"
import getDays from "../CustomFunctions/getDays"
import getMaxMinTemp from "../CustomFunctions/getMaxMinTemp"
import getCurrentDescription from "../CustomFunctions/getCurrentDescription"
import FirstWeatherCart from "./firstWeatherCart"
import DetailedSmallCart from "./detailedSmallCart"

function CityWeatherWeekly(props){

    const [width, setWidth] = useState(0)
    const [tempDayData, setTempDayData] = useState([])
    const [currentWeatherStates, setCurrentWeatherStates] = useState([])
    const currentDay = getDays()[0]
    const carouselRef = useRef()

    useEffect(() =>{
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[tempDayData]) 
    
    useEffect(() => {
        if(props.weeklyWeatherForecast.length !== 0){
           setTempDayData(getMaxMinTemp(props.weeklyWeatherForecast))
           setCurrentWeatherStates(getCurrentDescription(props.weeklyWeatherForecast))
        }
    },[props.weeklyWeatherForecast])
    

    const detailedSmallCarts = tempDayData.length > 0 ? tempDayData.map((item,i) => {
        return <DetailedSmallCart 
                    key={i} 
                    day={item.day} 
                    maxTemp={item.maxTemp}  
                    minTemp={item.minTemp} 
                    description={currentWeatherStates[i].description}
                    currentTemp={currentWeatherStates[i].currentTemp} 
                />
    }): false
   
    console.log(props.weeklyWeatherForecast)

    return(
            <div className="carts">
                <FirstWeatherCart />
                <motion.div ref={carouselRef} className="carousel">
                    <motion.div drag="x" dragConstraints={{right:0,left:-width}} className="inner-carousel">
                        <motion.div  className="inner-carousel" >{detailedSmallCarts}</motion.div>
                    </motion.div>
                   
                </motion.div>
            </div>
    )
    
}
const mapStateToProps = state => {
    return {
        allWeatherForecasts:state.allWeatherForecasts,
        data:state.data,
        weeklyWeatherForecast:state.weeklyWeatherForecast
    }
}
export default connect(mapStateToProps)(CityWeatherWeekly)