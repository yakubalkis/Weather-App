import React,{useState, useRef, useEffect} from "react"
import { connect } from "react-redux"
import { motion } from "framer-motion"
import Cart from "../WeatherCarts/Cart"
import DetailedSmallCart from "./DetailedSmallCart"

function CityWeatherWeekly(props){

    const [width, setWidth] = useState(0)
    const carouselRef = useRef()
    useEffect(() =>{
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    },[])
    const firstWeatherCart= props.allWeatherForecasts.map((city,i) => {
        if(props.data[2] === i){
            return <Cart 
                        key={i}
                        idOfCity={city.id}
                        index={i}
                        city={props.data[1]}
                        country={city.sys.country}
                        weatherState={city.weather[0].description}
                        currentTemp={city.main.temp}
                        feelsLike={city.main.feels_like}
                        humidity={city.main.humidity}
                   />
        }
        else return false
    })

    return(
            <div className="carts">
                {firstWeatherCart}
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
        data:state.data
    }
}
export default connect(mapStateToProps)(CityWeatherWeekly)