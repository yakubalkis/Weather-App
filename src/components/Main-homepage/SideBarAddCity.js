import React,{ useEffect, useRef, useState} from "react";
import { connect } from "react-redux";
import Shadow from "./Shadow";
import { showSideBar,hideSideBar, getCountries, getCountry, getCity,  addCity, getPositionOfCity, setIsSituationDeletingCity } from "../../redux/actions";
import xIconDark from '../img/x-iconDark.png'
import xIconLight from '../img/x-iconLight.png'
import cancelIconDark from '../img/cancelDark.png'
import cancelIconLight from '../img/cancelLight.png'
import saveIcon from '../img/icon-save.png'
import OptionCountry from "./optionCountry";
import OptionCity from "./optionCity";



function SideBar(props){
    const sidebarRef = useRef()
    const [isDisableSelectCountry, setIsDisableSelectCountry ] = useState(true)
    const [isDisableSelectCity, setIsDisableSelectCity] = useState(true)
    const theme = props.isToggle ? 'dark':'light'
    const xIcon = props.isToggle ? xIconDark : xIconLight
    const cancelIcon = props.isToggle ? cancelIconDark : cancelIconLight

    useEffect(()  => {
        document.addEventListener("mousedown", (event) =>  {
            if(!sidebarRef.current?.contains(event.target))
                props.hideSideBar()
        })
    })

    useEffect(() => {
       props.getCountries()
    },[])

    

    function handleSelectCountry(e){
        if(e.target.value !== 'no select'){
            setIsDisableSelectCountry(false)
            props.getCountry(e.target.value)
        }
        else{
            setIsDisableSelectCountry(true)
            setIsDisableSelectCity(true)
        }
    }

    function handleSelectCity(e){
        if(e.target.value !== 'no select'){
            setIsDisableSelectCity(false)
            props.getCity(e.target.value)
        }
        else{setIsDisableSelectCity(true)}
    }
    
    function handleSaveButton(){
         if(!props.selectedCities.includes(props.selectedCity)){
                props.setIsSituationDeletingCity()
                props.addCity(props.selectedCity)
            }
    }
   
    const optionsCountries = props.countries.data?.map((item, i) => {
        return (<OptionCountry  key={i} country={item.country} />) 
    })
    
    
    const optionsCities = props.selectedCountry.length > 0 ? props.countries.data?.filter((country => country.country === props.selectedCountry))[0].cities.map((city, i) => {
        return (<OptionCity  key={i} city={city} />)
    }) : false
   
  
    return(
        <>
        <div className={`sidebar-homepage ${theme}-modeSidebar`} style={{display: props.isShow ? 'block':'none'}}  ref={sidebarRef}>
            <div className="sidebar-homepage-elements">
                <div className="sidebar-header">
                    <h3>Add City</h3>
                    <img alt="" onClick={() => props.hideSideBar()} className="btn" src={xIcon} />
                </div>
                <div className="sidebar-selects" >
                <p>Country</p>
                    {props.isShow && <select onClick={(e) => {handleSelectCountry(e)}}  className={`sidebar-select ${theme}-mode`} >
                        <option value='no select' >Select a country</option>
                        {optionsCountries}
                        
                    </select>}
                    <p className="select-city">City</p>
                    {props.isShow && <select onClick={(e) => {handleSelectCity(e)}} className={`sidebar-select ${theme}-mode`} disabled={isDisableSelectCountry} >
                        <option value='no select' >Select a city</option>
                        {optionsCities}
                    </select>}
                </div>
                <div className="sidebar-footer" >
                    <button 
                        className={`btn ${theme}-mode`}
                        onClick={() => props.hideSideBar()}
                            >
                            <img alt="" className="btn-img" src={cancelIcon} />
                        Cancel
                    </button>

                    <button 
                        className={`btn btn-save`} 
                        disabled={isDisableSelectCity}
                        onClick={() => {handleSaveButton()}}
                        style={{cursor: isDisableSelectCity ? 'not-allowed': 'pointer'}}
                         >
                            <img alt="" disabled={isDisableSelectCity} className="btn-img" src={saveIcon} />
                        Save
                    </button>
                </div>
            </div>
        </div>
        <Shadow />
        </>
    )
}
const mapStateToProps = state =>{
    return { 
        isToggle:state.isToggle,
        isShow:state.isShow,
        countries:state.countries,
        selectedCountry:state.selectedCountry,
        selectedCity:state.selectedCity,
        selectedCities:state.selectedCities,
        infoOfSelectedCities:state.infoOfSelectedCities,
        removedCitiesNames:state.removedCitiesNames
    }
}
export default connect(mapStateToProps, 
                        {showSideBar,
                        hideSideBar, 
                        getCountries, 
                        getCountry, 
                        getCity, 
                        addCity, 
                        getPositionOfCity,
                        setIsSituationDeletingCity
                       })(SideBar)