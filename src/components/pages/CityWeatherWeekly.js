import React,{useState, useEffect} from "react"
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore,{Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/bundle'
import { connect } from "react-redux"
import getMaxMinTemp from "../CustomFunctions/getMaxMinTemp"
import getCurrentDescription from "../CustomFunctions/getCurrentDescription"
import FirstWeatherCart from "./firstWeatherCart"
import DetailedSmallCart from "./detailedSmallCart"


SwiperCore.use([Navigation, Pagination])
function CityWeatherWeekly(props){

    
    const [tempDayData, setTempDayData] = useState([])
    const [currentWeatherStates, setCurrentWeatherStates] = useState([])
    const slides = []
    const [width, setWidth]   = useState(window.innerWidth)
    
    
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    
    useEffect(() => {
        if(props.weeklyWeatherForecast.length !== 0){
           setTempDayData(getMaxMinTemp(props.weeklyWeatherForecast))
           setCurrentWeatherStates(getCurrentDescription(props.weeklyWeatherForecast))
        }
    },[props.weeklyWeatherForecast])
   

    for(let i = 0; i < tempDayData.length; i++){
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" style={{listStyle:'none'}} >
                <DetailedSmallCart 
                       key={i} 
                       index={i}
                       day={tempDayData[i].day} 
                       maxTemp={tempDayData[i].maxTemp}  
                       minTemp={tempDayData[i].minTemp} 
                       description={currentWeatherStates[i].description}
                       currentTemp={currentWeatherStates[i].currentTemp} 
                />
            </SwiperSlide>
        )
    }

    return(
        <>
            <div className="carts">
                <FirstWeatherCart />
                <Swiper
                    tag="section"
                    wrapperTag="ul"
                    className='swiper'
                    navigation
                    pagination
                    spaceBetween={0}
                    slidesPerView={width > 1045 ? 4 : width > 885 ? 3 : width > 550 ? 2 : 1}
                    >
                    {slides}
                </Swiper>
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

