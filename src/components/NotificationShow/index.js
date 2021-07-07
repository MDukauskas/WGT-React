import React from 'react'
import './index.scss'

export const NotificationShow = (props) => {
    return (
        <div className="content-notification">
            {props.children}
        </div>
    )
}