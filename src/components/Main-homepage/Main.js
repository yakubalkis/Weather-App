import React from "react";
import { showSideBar} from "../../redux/actions";
import { connect } from "react-redux";


function Main(props){
    const theme = props.isToggle ? 'dark' : 'light'
    
    return(
        <main className={"main"} >
            <div className={"main-elements"}>
                <h1>Tracked Cities</h1>
                <h2>All the cities you are saved to see the weather!</h2>
                <button onClick={() => props.showSideBar()} className={`${theme}-modeForBtnAdd btn`} >+ Add City</button>
            </div>
        </main>
    )
}
const mapStateToProps = state => {
    return {
        isToggle:state.isToggle,
        isShow:state.isShow
    }
}

export default connect(mapStateToProps, {showSideBar})(Main)