import React,{ useState} from "react";
import xIconDark from '../img/x-iconDark.png'
import xIconLight from '../img/x-iconLight.png'
import cancelIconDark from '../img/cancelDark.png'
import cancelIconLight from '../img/cancelLight.png'
import saveIcon from '../img/icon-save.png'
import { showSideBar } from "../../redux/actions";
import { connect } from "react-redux";



function SideBar(props){
    const [isDisableSelectCountry, setIsDisableSelectCountry ] = useState(true)
    const [isDisableSelectCity, setIsDisableSelectCity] = useState(true)
    const theme = props.isToggle ? 'dark':'light'
    const xIcon = props.isToggle ? xIconDark : xIconLight
    const cancelIcon = props.isToggle ? cancelIconDark : cancelIconLight

  
    
    function handleSelectCountry(e){
        if(e.target.value !== 'no select'){
            setIsDisableSelectCountry(false)
        }
        else{
            setIsDisableSelectCountry(true)
            setIsDisableSelectCity(true)
        }
    }
    function handleSelectCity(e){
        if(e.target.value !== 'no select'){
            setIsDisableSelectCity(false)
        }
        else{setIsDisableSelectCity(true)}
    }
  
   
    return(
        <div className={`sidebar-homepage ${theme}-modeSidebar`}>
            <div className="sidebar-homepage-elements">
                <div className="sidebar-header">
                    <h3>Add City</h3>
                    <img alt="" onClick={() => props.showSideBar()} className="btn" src={xIcon} />
                </div>
                <div className="sidebar-selects" >
                <p>Country</p>
                    <select onClick={(e) => {handleSelectCountry(e)}}  className={`sidebar-select ${theme}-mode`} >
                        <option value='no select' >Select a country</option>
                        <option value='2'>Sele sd ountry</option>
                        <option>Sele asd country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                    </select>
                    <p className="select-city">City</p>
                    <select onClick={(e) => handleSelectCity(e)} className={`sidebar-select ${theme}-mode`} disabled={isDisableSelectCountry} >
                        <option value='no select' >Select a city</option>
                        <option onClick={(e) => console.log('hello')}  value='3'>Selectsss country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                        <option>Select a country</option>
                    </select>
                </div>
                <div className="sidebar-footer" >
                    <button 
                        className={`btn ${theme}-mode`}
                        onClick={() => props.showSideBar()}
                            >
                            <img alt="" className="btn-img" src={cancelIcon} />
                        Cancel
                    </button>

                    <button 
                        className={`btn btn-save`} 
                        disabled={isDisableSelectCity} >
                            <img alt="" disabled={isDisableSelectCity} className="btn-img" src={saveIcon} />
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        isToggle:state.isToggle,
        isShow:state.isShow
    }
}
export default connect(mapStateToProps, {showSideBar})(SideBar)