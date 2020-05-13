import React from 'react'
import './index.scss'

export const Page = (props) => {
    return (
        <div className="userside">
            {props.children}
        </div>
    )
}