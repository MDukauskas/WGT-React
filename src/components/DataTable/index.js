import React from 'react'
import './index.scss'

export const DataTable = (props) => {
    return (
        <div className="content-body">
            {props.children}
        </div>
    )
}