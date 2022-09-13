import React,{useState, useRef, useEffect} from "react"
import { connect } from "react-redux"
import getMaxMinTemp from "../CustomFunctions/getMaxMinTemp"
import getCurrentDescription from "../CustomFunctions/getCurrentDescription"
import FirstWeatherCart from "./firstWeatherCart"
import DetailedSmallCart from "./detailedSmallCart"
import iconDoubleLeft from '../img/icon-double-left.png'
import iconDoubleRight from '../img/icon-double-right.png'

function CityWeatherWeekly(props){

    const [width, setWidth] = useState(0)
    const [drag, setDrag] = useState(0)
    const [tempDayData, setTempDayData] = useState([])
    const [currentWeatherStates, setCurrentWeatherStates] = useState([])
    const carouselRef = useRef()

    useEffect(() =>{
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[tempDayData,drag]) 
    
    useEffect(() => {
        if(props.weeklyWeatherForecast.length !== 0){
           setTempDayData(getMaxMinTemp(props.weeklyWeatherForecast))
           setCurrentWeatherStates(getCurrentDescription(props.weeklyWeatherForecast))
        }
    },[props.weeklyWeatherForecast])
   
    console.log(tempDayData)
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
   


    return(
        <>
            <div className="carts">
                <FirstWeatherCart />
                <div ref={carouselRef} className="carousel">
                    <div drag="x" dragConstraints={{right:0,left:-width}} style={{transform:`translateX(${drag})`}} className="inner-carousel">
                        <div  className="inner-carousel" style={{transform:`translateX(${drag})`}}>{detailedSmallCarts}</div>
                    </div>
                    <img className="icon-double-left btn-left-right" alt="" src={iconDoubleLeft} onClick={() => {setDrag('0rem')}}/>
                    <img className="icon-double-right btn-left-right" alt="" src={iconDoubleRight} onClick={() =>  {setDrag('-5.3rem')}} />
                </div>
            </div>
        </>
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