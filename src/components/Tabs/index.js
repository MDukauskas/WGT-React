import React, { useState } from 'react'
import './index.scss'

export const Tabs = (props) => {
    const tabs = props.tabs
    const [activeTab, setActiveTab] = useState(0)

    return <div>
        <div className="tabs">
            {tabs.map((tab, index) =>
                <button key={tab.title} className={index === activeTab ? 'tabs_header tabs_header-active' : 'tabs_header'} onClick={() => {
                    setActiveTab(index)
                }}>{tab.title}</button>
            )}
        </div>
        <div className="tabs_body">{
            tabs[activeTab].content
        }</div>
    </div>
}

