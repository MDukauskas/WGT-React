import React, { useState, useEffect } from 'react'
import { Button, Menu } from '../../components'
import './index.scss'
import vector1black from '../../assets/vector1black.svg';
import { Link } from 'react-router-dom'

export const UserListPage = () => {

    const [users, setusers] = useState([])

    useEffect(() => {
        const authKey = localStorage.getItem('auth_key')
        fetch('http://localhost:3002/api/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        }).then((response) => {
            if (!response.ok) { throw response }
            return response.json()
        }).then(data => {
            setusers(data)
        }).catch(error => {
            if (error.status === 401) {
                window.location.href = '/'
            } else {
                console.error(error)
            }
        })
    }, [])

    return (
        <div className="userside">
            <Menu />
            <div className="content">
                <div className="content-header">
                    <p>Users</p>
                    <Link to="/users/new"><Button primary> New User</Button></Link>
                </div>
                <div className="rectangle"><div className="rectangle-orange"></div></div>

                <div className="content-body">
                    <p>Loading...</p>
                    <p>There are no data to show currently. <span className="content-body--orange"> Create new user</span></p>
                    <table className="columns_header">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Photo</th>
                                <th>Comments</th>
                                <th>Department</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, id) =>
                                < tr key={id}>
                                    <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                    <td>{user.surname}</td>
                                    <td> <img src={user.photo} alt="vector1black" />{}</td>
                                    <td>{user.comment}</td>
                                    <td>{user.departmentId}</td>
                                    <td>{user.positionId}</td>
                                </tr>)}
                        </tbody>
                    </table>
                    <div className="spacer"></div>
                    <div className="content-pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">❮</a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">❯</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}