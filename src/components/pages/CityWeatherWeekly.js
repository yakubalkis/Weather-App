import React,{useState, useRef, useEffect} from "react"
import { connect } from "react-redux"
import { motion } from "framer-motion"
//import Cart from "../WeatherCarts/Cart"
import getDays from "../CustomFunctions/getDays"
import getMaxMinTemp from "../CustomFunctions/getMaxMinTemp"
import FirstWeatherCart from "./firstWeatherCart"
import DetailedSmallCart from "./detailedSmallCart"

function CityWeatherWeekly(props){

    const [width, setWidth] = useState(0)
    let maxMinTemps;
    const currentDay = getDays()[0]
    const carouselRef = useRef()
    useEffect(() =>{
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[]) 
    useEffect(() => {
        if(props.weeklyWeatherForecast.length !== 0){
            maxMinTemps = getMaxMinTemp(props.weeklyWeatherForecast)
            console.log(maxMinTemps)
        }
    },[props.weeklyWeatherForecast])
    

    // const detailedSmallCarts = props.weeklyWeatherForecast ?  props.weeklyWeatherForecast.map((item,i) => {
    //     if(currentDay !== item.dt_txt[8]+item.dt_txt[9]){
    //         i=i+8
    //         console.log('hello')
    //     }
       
    // }) :  false
   
    console.log(props.weeklyWeatherForecast)

    return(
            <div className="carts">
                <FirstWeatherCart />
                <motion.div ref={carouselRef} className="carousel">
                    <motion.div drag="x" dragConstraints={{right:0,left:-width}} className="inner-carousel">
                        <motion.div className="item"><DetailedSmallCart/></motion.div> 
                        <motion.div className="item"><DetailedSmallCart/></motion.div>
                        <motion.div className="item"><DetailedSmallCart/></motion.div>
                        <motion.div className="item"><DetailedSmallCart/></motion.div>
                        <motion.div className="item"><DetailedSmallCart/></motion.div>
                        <motion.div className="item"><DetailedSmallCart/></motion.div>
                        <motion.div className="item"><DetailedSmallCart/></motion.div>
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