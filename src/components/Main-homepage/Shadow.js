import { connect } from "react-redux"
import { hideSidebarAddCity, hideSidebarDeleteCity,hidePopup } from "../../redux/actions"
function Shadow(props){
    return (
        <>
        <div onClick={() => {props.hideSidebarDeleteCity();props.hideSidebarAddCity();props.hidePopup()}} className="shadow" ></div>
        </>
    )
}
const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, {hideSidebarAddCity,hideSidebarDeleteCity, hidePopup})(Shadow)