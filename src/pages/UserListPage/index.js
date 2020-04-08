import React, { useState, useEffect } from 'react'
import { Button, Menu } from '../../components'
import './index.scss'
// import vector1black from '../../assets/vector1black.svg';
import { Link } from 'react-router-dom'
import { makeRequest } from '../../Services'

export const UserListPage = () => {

    const [users, setusers] = useState([])
    const [positions, setPositions] = useState([])
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        makeRequest('/user')
            .then(data => {
                setusers(data)
            })
    }, [])


    useEffect(() => {
        makeRequest('/position')
            .then(data => {
                setPositions(data)
            })
    }, [])


    useEffect(() => {
        makeRequest('/department')
            .then(data => {
                setDepartments(data)
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
                            {users.map((user, id) => {
                                const position = positions.find(position => position.id === user.positionId)
                                const department = departments.find(department => department.id === user.departmentId)
                                return (
                                    <tr key={id}>
                                        <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
                                        <td>{user.surname}</td>
                                        <td> <img src={user.photo} alt="vector1black" />{}</td>
                                        <td>{user.comment}</td>
                                        <td>{department && department.name}</td>
                                        <td>{position && position.name}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="spacer"></div>
                <div className="content-footer">
                    <div className="content-pagination">
                        <a href="/users">&laquo;</a>
                        <a href="/users">❮</a>
                        <a href="/users" className="active">1</a>
                        <a href="/users">2</a>
                        <a href="/users">3</a>
                        <a href="/users">4</a>
                        <a href="/users">5</a>
                        <a href="/users">6</a>
                        <a href="/users">❯</a>
                        <a href="/users">&raquo;</a>
                    </div>
                </div>
            </div>
        </div >
    );
}