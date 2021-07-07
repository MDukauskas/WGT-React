import React from 'react'
import './index.scss'


export const Card = (props) => {

    return         <div className="card">
    <div className="card_header">{props.title}</div>
    <div className="card_body"> {props.children}</div>
  </div>


}