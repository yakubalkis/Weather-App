import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggle} from "../../redux/actions";
import darkIcon from '../img/dark-icon.png'
import lightIcon from '../img/light-icon.png'

function Header(props){

    const theme = props.isToggle ? 'dark' : 'light'
    const btnIcon = props.isToggle ? lightIcon: darkIcon

    return (
        <header className={`header ${theme}-mode`} >
            <Link to='/' style={{textDecoration:'none'}}><h2 className={`${theme}-mode`}>Weather App</h2></Link>
            <button onClick={() => props.toggle()} className={`btn ${theme}-modeForBtnMode`}><img alt="" src={btnIcon} /></button>
        </header>
    )
}
const mapStateToProps = state => {
    return {
        isToggle: state.isToggle
    }
}
export default connect(mapStateToProps, {toggle})(Header)