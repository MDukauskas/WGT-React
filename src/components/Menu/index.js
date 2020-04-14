import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
import vector from '../../assets/vector.svg';
import vector1 from '../../assets/vector1.svg';
import position from '../../assets/position.svg';
import logout from '../../assets/logout.svg';


export const Menu = (props) => {

    function removeSesion() {
        localStorage.setItem('auth_key', '')
    }

    return (
        <div className="menu">
            <div className="menu-title">
                <img src={vector1} alt="vector1" />
                <h2>OnBoarding</h2>
            </div>
            <ul className="menu-body">
                <Link to="/users"><li><img src={vector1} alt="vector1" />Users</li></Link>
                <Link to="/departments"><li><img src={vector} alt="vector" />Departments</li></Link>
                <Link to="/positions"><li><img src={position} alt="position" />Positions</li></Link>
                <div className="spacer"></div>
                <Link to="/"><li onClick={removeSesion}><img src={logout} alt="logout" />Logout</li></Link>
            </ul>
        </div>
    )
}