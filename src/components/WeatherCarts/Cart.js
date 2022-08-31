export default  function Cart(){
    return(
        <div className="cart">
           <p className="cart-day">Wednesday</p>
           <p className="cart-day">31</p>
           <img className="cart-icon" alt="" />
           <p className="cart-city">Leira<span className="cart-city-country">PT</span></p>
           <p className="cart-weather-state">Scattered clouds</p>
           <div className="cart-weather-info-div">
            <div className="cart-weather-info">
                <p>Current Temp.</p>
                <p>23°C</p>
            </div>
            <div className="cart-weather-info">
                <p>Feels Like</p>
                <p>23°C</p>
            </div>
            <div className="cart-weather-info">
                <p>Humidity</p>
                <p>71%</p>
            </div>
           </div>
        </div>
    )
}