import React from 'react'
import './index.scss'


export const InputGroup = (props) => {

    return <div className="input-group">
        <span className="input-group_label">{props.label}</span>
        {props.type === 'text' &&
            <input
                type="text"
                value={props.value}
                onChange={e => props.onChange && props.onChange(e.target.value)}
            />
        }
        {props.type === 'password' &&
            <input
                type="password"
                value={props.value}
                onChange={e => props.onChange && props.onChange(e.target.value)}
            />
        }
        {props.type === 'select' &&
            <select
                value={props.value}
                onChange={e => props.onChange && props.onChange(e.target.value)}
            >
                {props.children}
            </select>
        }
        <span className="input-group_error">{props.error}</span>
    </div>
}
