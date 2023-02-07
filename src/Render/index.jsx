import { useState } from 'react'
import {Dialog} from "@reach/dialog"
import "@reach/dialog/styles.css";
import "./index.css"


const Render = props => {
    const {msgList} = props 
    const [dialog, setOnDialog] = useState(false)

    const eventHandler = () => {
        setOnDialog(prevState => !prevState)
    }

    return (
        <div className="msgContainer">
        <h2>id : {msgList.id}</h2>
        <h2>sub : {msgList.subject}</h2>
        <h3>type  : {msgList.type}</h3>
        <h4>view_href : {msgList.view_href}</h4>
        <div className='button-Container'>
        <button type = "button" onClick = {eventHandler}>View More</button>
        </div>
        <Dialog isOpen = {dialog} onDismiss = {!dialog}>
            <div className='x-button'>
                <button onClick={eventHandler}>X</button>
            </div>
            <p> <b>Id</b> : {msgList.id}</p>
            <p> <b>Subject</b> : {msgList.subject}</p>
            <span className='span'> view_href : <a href={msgList.view_href} target= "_blank" >{msgList.view_href}</a></span>
            <div className='Dialog-btn-Container'>
            <button onClick={eventHandler}>Close</button>
            </div>
        </Dialog>
        </div>
    )
}

export default Render