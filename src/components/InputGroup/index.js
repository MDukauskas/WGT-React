import React from 'react'
import './index.scss'

export const InputGroup = (props) => {
    return <div className="input-group">
        <span className="input-group_label">{props.label}</span>
        {props.type === 'text' && <input type="text" placeholder="Text Input Value" onChange={() => { }} />}
        {props.type === 'select' && <select><option value="">Select Input Label</option></select>}
        <span className="input-group_error">{props.error}</span>
    </div>
}
