import React,{useState, useRef, useEffect} from "react"
import { connect } from "react-redux"
import { motion } from "framer-motion"
import getMaxMinTemp from "../CustomFunctions/getMaxMinTemp"
import getCurrentDescription from "../CustomFunctions/getCurrentDescription"
import FirstWeatherCart from "./firstWeatherCart"
import DetailedSmallCart from "./detailedSmallCart"
import iconDoubleLeft from '../img/icon-double-left.png'
import iconDoubleRight from '../img/icon-double-right.png'

function CityWeatherWeekly(props){

    const [width, setWidth] = useState(0)
    const [tempDayData, setTempDayData] = useState([])
    const [currentWeatherStates, setCurrentWeatherStates] = useState([])
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
                    index={i}
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
                    <img className="icon-double-left" alt="" src={iconDoubleLeft} />
                    <img className="icon-double-right" alt="" src={iconDoubleRight} />
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