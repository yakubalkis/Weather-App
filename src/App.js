import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from './components/Header/Header'
import Main from "./components/Main-homepage/Main";
import Carts from "./components/WeatherCarts/Carts";

function App(props){
  const theme = props.isToggle ? 'dark' : 'light' 

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = props.isShowSidebarAddCity ? 'hidden' : 'auto'
  },[props.isShowSidebarAddCity])

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = props.isShowSidebarDeleteCity ? 'hidden': 'auto'
  },[props.isShowSidebarDeleteCity])


  return (
    <div className={`${theme}-mode container`} >
      <Header />
      <Main />
      <Carts />
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isToggle:state.isToggle,
    isShowSidebarAddCity:state.isShowSidebarAddCity,
    isShowSidebarDeleteCity:state.isShowSidebarDeleteCity

  }
}

export default connect(mapStateToProps)(App)