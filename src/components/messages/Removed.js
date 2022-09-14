import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setIsShowMessageRemoved } from "../../redux/actions"


function RemovedMessage(props){

    useEffect(() => {
        if(props.isShowMessageRemoved===true){
            setTimeout(() => {
                props.setIsShowMessageRemoved()
            },1000)
        }
    },[props.isShowMessageRemoved])

    const style = {visibility: props.isShowMessageRemoved ? 'visible' : 'hidden'}
    return(
        <div className="message message-removed" style={style}>
            City Removed Successfully!
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isShowMessageRemoved:state.isShowMessageRemoved
    }
}
export default connect(mapStateToProps,{setIsShowMessageRemoved})(RemovedMessage)