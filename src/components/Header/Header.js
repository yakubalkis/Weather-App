import React from "react";
import darkIcon from '../img/dark-icon.png'
import lightIcon from '../img/light-icon.png'
import { connect } from "react-redux";
import { toggle } from "../../redux/actions";

function Header(props){

    const theme = props.isToggle ? 'dark' : 'light'
    const btnIcon = props.isToggle ? lightIcon: darkIcon

    return (
        <header className={`header ${theme}-mode`}>
            <h2 className={`${theme}-mode`}>Weather App</h2>
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