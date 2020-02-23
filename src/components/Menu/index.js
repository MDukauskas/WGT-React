import React from 'react'
import './index.scss'
import vector from '../../vector.svg';
import vector1 from '../../vector1.svg';
import position from '../../position.svg';
import logout from '../../logout.svg';


export const Menu = (props) => {
    return (
        <div className="menu">
            <div className="menu-title">
                <img src={vector1} alt="vector1" />
                <h2>OnBoarding</h2>
            </div>
            <ul className="menu-body">
                <a href="#"><li><img src={vector1} alt="vector1" />Users</li></a>
                <a href="#"><li><img src={vector} alt="vector" />Departments</li></a>
                <a href="#"><li><img src={position} alt="position" />Positions</li></a>
                <div className="spacer"></div>
                <a href="#"><li><img src={logout} alt="logout" />Logout</li></a>
            </ul>
        </div>
    )
}