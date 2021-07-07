import React from 'react'
import './index.scss'

export const LoadingBar = () => {
    return (
        <div>
            <p>Loading...</p>
            <div className="rectangle"><div className="rectangle_orange"></div></div>
        </div>
    )
}