import React,{ useRef} from "react";
import xIconDark from '../img/x-iconDark.png'
import xIconLight from '../img/x-iconLight.png'
import cancelIconDark from '../img/cancelDark.png'
import cancelIconLight from '../img/cancelLight.png'
import saveIcon from '../img/icon-save.png'
import { connect } from "react-redux";


function SideBar(props){
    const selectRef = useRef()
    const theme = props.isToggle ? 'dark':'light'
    const xIcon = props.isToggle ? xIconDark : xIconLight
    const cancelIcon = props.isToggle ? cancelIconDark : cancelIconLight
    
  
    function handleSelect(e){
        selectRef.current.disabled = e.target.value !== 'no select' ? false : true
    }
 
    return(
        <div className={`sidebar-homepage ${theme}-modeSidebar`}>
            <div className="sidebar-homepage-elements">
                <div className="sidebar-header">
                    <h3>Add City</h3>
                    <img alt="" className="btn" src={xIcon} />
                </div>
                <div className="sidebar-selects" >
                <p>Country</p>
                    <select onClick={(e) => {handleSelect(e)}} className={`sidebar-select ${theme}-mode`} >
                        <option value='no select' >Select a country</option>
                        <option value='2'>Sele sd ountry</option>
                        <option>Sele asd country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                    </select>
                    <p className="select-city">City</p>
                    <select className={`sidebar-select ${theme}-mode`} ref={selectRef} disabled={true} >
                        <option>Select a city</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                    </select>
                </div>
                <div className="sidebar-footer" >
                    <button  className={`btn ${theme}-mode`}><img alt="" className="btn-img" src={cancelIcon}/>Cancel</button>
                    <button  className={`btn btn-save`}><img alt="" className="btn-img" src={saveIcon} />Save</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        isToggle:state.isToggle
    }
}
export default connect(mapStateToProps)(SideBar)