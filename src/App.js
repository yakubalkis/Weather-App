import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from './components/Header/Header'
import Main from "./components/Main-homepage/Main";
import Carts from "./components/WeatherCarts/Carts";

function App(props){
  const theme = props.isToggle ? 'dark' : 'light' 

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = props.isShow ? 'hidden' : 'auto'
  },[props.isShow])


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
    isShow:state.isShow
  }
}

export default connect(mapStateToProps)(App)