import React,{useState, useEffect, useRef} from "react";
import { connect } from "react-redux";
import { getDataOfWillBeRemovedCity,showSidebarDeleteCity,getViewedCityAndCountryName,isUserComeBackHomePage,getWeeklyWeatherForecast } from "../../redux/actions";
import { Link } from "react-router-dom";
import iconMenu from '../img/icon-menu.png'

function CartMenu(props){


    const [isShowMenu,setIsShowMenu] = useState(false)
    const style = {
        display: isShowMenu ? 'block':'none'
    }
    const theme = props.isToggle ? 'dark' : 'light'

    
    const menuRef=useRef()
    useEffect(()  => {
        document.addEventListener("mousedown", (event) =>  {
            if(!menuRef.current?.contains(event.target))
                setIsShowMenu(false)
        })
    })
    
    
    return (
        <>
           <img alt='' src={iconMenu} className='icon-menu'  onClick={() => {setIsShowMenu(true);props.getViewedCityAndCountryName(props.cityName,props.countryName,props.idOfCity);}} />
           <div className='cart-menu' ref={menuRef} style={style}   >
            <Link to={`/${props.viewedCityName}`} style={{textDecoration:"none"}}>
                <button 
                        style={style} 
                        className={`cart-menu-button button-top ${theme}-modeSidebar`} 
                        ref={menuRef}
                        onClick={() =>{props.getWeeklyWeatherForecast(props.idOfCity) ;
                                       props.getDataOfWillBeRemovedCity(props.idOfCity, props.cityName, props.index); 
                                       props.isUserComeBackHomePage()}} 
                        >
                            View Weather
                </button>
            </Link>
             <button 
                    style={style}
                    className={`cart-menu-button button-bottom ${theme}-modeSidebar`}
                    ref={menuRef} 
                    onClick={() => {props.getDataOfWillBeRemovedCity(props.idOfCity, props.cityName, props.index) ; props.showSidebarDeleteCity()}}
                    >
                        Remove City
             </button>
           </div>
        </>
    )
} 
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle,
        viewedCityName:state.viewedCityName
    }
}
export default connect(mapStateToProps,
                                     {getDataOfWillBeRemovedCity,
                                      showSidebarDeleteCity,
                                      getViewedCityAndCountryName,
                                      isUserComeBackHomePage,
                                      getWeeklyWeatherForecast})(CartMenu)