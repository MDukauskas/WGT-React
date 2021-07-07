import React from "react"
import './index.scss'


export const MainContent = (props) => {
    return (
        <div className="content">
            {props.children}
        </div>
    )
}