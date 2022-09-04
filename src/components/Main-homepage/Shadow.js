import React from "react"
import { connect } from "react-redux"

function Shadow(props){
    return (
        <div className="shadow" style={{display: props.isShow ? 'block':'none'}}  ></div>
    )
}
const mapStateToProps = state => {
    return {
        isShow:state.isShow
    }
}
export default connect(mapStateToProps)(Shadow)