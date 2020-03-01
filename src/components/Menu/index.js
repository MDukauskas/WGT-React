import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
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
                <Link to="/users"><li><img src={vector1} alt="vector1" />Users</li></Link>
                <Link to="/departments"><li><img src={vector} alt="vector" />Departments</li></Link>
                <Link to="#"><li><img src={position} alt="position" />Positions</li></Link>
                <div className="spacer"></div>
                <Link to="#"><li><img src={logout} alt="logout" />Logout</li></Link>
            </ul>
        </div>
    )
}