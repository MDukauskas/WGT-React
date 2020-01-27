import React from 'react'
import './index.scss'



export const Button = (props) => {
    let classes = 'btn';
    if (props.primary === true) {
        classes= classes + ' btn-primary'
    }
    return <button className={classes}>{props.children}</button>

}
