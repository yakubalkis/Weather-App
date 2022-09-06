import { connect } from "react-redux"
import { hideSidebarAddCity, hideSidebarDeleteCity } from "../../redux/actions"
function Shadow(props){
    return (
        <>
        <div onClick={() => {props.hideSidebarDeleteCity();props.hideSidebarAddCity()}} className="shadow" ></div>
        </>
    )
}
const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {hideSidebarAddCity,hideSidebarDeleteCity})(Shadow)