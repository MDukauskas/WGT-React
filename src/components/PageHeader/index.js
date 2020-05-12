import React from 'react'
import './index.scss'


export const PageHeader = (props) => {
    return (
        <div className="content-header">
            <p>{props.header}</p>
            {props.children}
        </div>
    )
}