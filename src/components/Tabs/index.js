import React from 'react'
import './index.scss'

export const Tabs = (props) => {
    return <div className="tabs">
            <div className="tabs_header tabs_header-active">
                <button>Card with tabs</button>
                <button>Card with tabs</button>
                <button>Card with tabs</button>
            </div>
            <div className="tabs_body"> </div>
    </div>
}

