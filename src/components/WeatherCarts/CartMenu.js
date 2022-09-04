import React,{useState, useEffect, useRef} from "react";
import { connect } from "react-redux";
import { getRemovedCityId, getRemovedCityName,getDataOfWillBeRemovedCity,showSidebarDeleteCity } from "../../redux/actions";
import iconMenu from '../img/icon-menu.png'

function CartMenu(props){

    const menuRef=useRef()
    const [isShowMenu,setIsShowMenu] = useState(false)

    useEffect(()  => {
        document.addEventListener("mousedown", (event) =>  {
            if(!menuRef.current?.contains(event.target))
                setIsShowMenu(false)
        })
    })
    
    const style = {
        display: isShowMenu ? 'block':'none'
    }
    const theme = props.isToggle ? 'dark' : 'light'
    
    return (
        <>
           <img alt='' src={iconMenu} className='icon-menu' onClick={() => {setIsShowMenu(true)}} />
           <div className='cart-menu'  >
             <button style={style} className={`cart-menu-button button-top ${theme}-modeSidebar`} ref={menuRef} >View Weather</button>
             <button 
                    style={style}
                    ref={menuRef} 
                    className={`cart-menu-button button-bottom ${theme}-modeSidebar`}
                    onClick={() => {props.getDataOfWillBeRemovedCity(props.idOfCity, props.cityName, props.index) ; props.showSidebarDeleteCity() ; props.getRemovedCityName(props.cityName)}}
                    >
                        Remove City
             </button>
           </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle
    }
}
export default connect(mapStateToProps, {getRemovedCityId, getRemovedCityName,getDataOfWillBeRemovedCity,showSidebarDeleteCity})(CartMenu)