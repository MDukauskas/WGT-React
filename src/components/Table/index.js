import React from 'react'
import './index.scss'


export const Table = (props) => {
    return (
        <table className="columns_header" >
            <thead >
                <tr>
                    {props.headers.map(header => <th>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.data.map(props.render)}
            </tbody>
        </table >

    )
}