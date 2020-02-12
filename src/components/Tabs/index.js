import React from 'react'
import './index.scss'

export const Tabs = (props) => {
    const tabs = ['Card with tabs 1', 'Card with tabs 2', 'Card with tabs 3']

    return <div>
                <div className="tabs">
                    {tabs.map((tab, index) =>
                        <button className={index === 0 ? 'tabs_header tabs_header-active' : 'tabs_header'}>{tab}</button>
                    )}
                </div>
                <div className="tabs_body"> </div>
            </div>
}

