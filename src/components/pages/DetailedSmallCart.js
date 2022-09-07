import getDays from "../CustomFunctions/getDays"
import sunIcon from '../img/icon-sun.png'

export default function DetailedSmallCart(){
    return(
        <div className="cart cart-small" >
            <p className="cart-day">{getDays()[1]}</p>
            <p className="cart-day-number">{getDays()[0]}</p>
            <img className="cart-icon" alt="" src={sunIcon} />
            <div className="cart-weather-info-div">
                    <p className='temp'>32°C</p>
                    <p className='temp'>20°C</p>
           </div>
        </div>
    )
}