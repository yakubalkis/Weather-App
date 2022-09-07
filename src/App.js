import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { hideSidebarDeleteCity,hideSidebarAddCity } from "./redux/actions";
import Header from './components/Header/Header'
import Main from "./components/Main-homepage/Main";
import Carts from "./components/WeatherCarts/Carts";
import MainOfDetailPage from './components/pages/Main'

function App(props){
  const theme = props.isToggle ? 'dark' : 'light' 

  const {pathname} = useLocation()
  useEffect(() => {
    props.hideSidebarDeleteCity()
    props.hideSidebarAddCity()
  },[pathname])

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
      <Routes>
        <Route path="/" element={<><Main /><Carts/></>}/>
        <Route path={`/${props.viewedCityName}`} element={<MainOfDetailPage/>} />
      </Routes>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isToggle:state.isToggle,
    isShowSidebarAddCity:state.isShowSidebarAddCity,
    isShowSidebarDeleteCity:state.isShowSidebarDeleteCity,
    viewedCityName:state.viewedCityName
  }
}

export default connect(mapStateToProps,{hideSidebarDeleteCity,hideSidebarAddCity})(App)