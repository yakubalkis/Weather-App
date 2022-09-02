import React,{useState} from "react";
import { connect } from "react-redux";
import iconMenu from '../img/icon-menu.png'

function CartMenu(props){

    const [isShowMenu,setIsShowMenu] = useState(false)
    const style = {
        display: isShowMenu ? 'block':'none'
    }
    const theme = props.isToggle ? 'dark' : 'light'
    return (
        <>
            <img alt='' src={iconMenu} className='icon-menu' onClick={() => {setIsShowMenu(prevState => !prevState)}} />
           <div className='cart-menu'  >
             <button style={style} className={`cart-menu-button button-top ${theme}-modeSidebar`}>View Weather</button>
             <button style={style} className={`cart-menu-button button-bottom ${theme}-modeSidebar`}>Remove City</button>
           </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle
    }
}
export default connect(mapStateToProps)(CartMenu)