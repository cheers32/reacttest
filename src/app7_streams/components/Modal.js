import React from "react";
import ReactDOM from 'react-dom'
import customHistory from "../customHistory";

const Modal = props => {
    return ReactDOM.createPortal(
        //<div onClick={()=>customHistory.push('/7')} className="ui dimmer modals visible active">
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                test modal
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {/*<button className="ui primary button">Delete</button>*/}
                    {/*<button className="ui button">Cancel</button>*/}
                    {props.actions}
                </div>

            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal