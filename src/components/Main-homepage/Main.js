import React, {useState} from "react";
import SideBar from "./SideBar";
import { connect } from "react-redux";


function Main(props){
    const theme = props.isToggle ? 'dark' : 'light'
    const [showSideBar, setShowSideBar] = useState(false)
    return(
        <main className={"main"}>
            <div className={"main-elements"}>
                <h1>Tracked Cities</h1>
                <h2>All the cities you are saved to see the weather!</h2>
                <button onClick={() => setShowSideBar(true)} className={`${theme}-modeForBtnAdd btn`} >+ Add City</button>
            </div>
            {showSideBar && <SideBar/>}
        </main>
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle
    }
}

export default connect(mapStateToProps)(Main)