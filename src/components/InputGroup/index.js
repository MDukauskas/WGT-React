import React from 'react'
import './index.scss'
import { useState } from 'react'


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
            <select>
                <option
                    value=""
                >
                    Select Input Label
                </option>
            </select>
        }
        <span className="input-group_error">{props.error}</span>
    </div>
}
