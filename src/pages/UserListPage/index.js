import React, { useState } from 'react'
import { InputGroup, Card, Button, Menu } from '../../components'
import './index.scss'
import vector1black from '../../vector1black.svg';

export const UserListPage = () => {

    const users = [
        { id: 1, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 2, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 3, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 4, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 5, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 6, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
    ]

    return (
        <div className="userside">
            <Menu />
            <div className="content">
                <div className="content-header">
                    <p>Users</p>
                    <Button primary> New User</Button>
                </div>
                <div className="rectangle"><div className="rectangle-orange"></div></div>

                <div className="content-body">
                    <p>Loading...</p>
                    <p>There are no data to show currently. <span className="content-body--orange"> Create new user</span></p>
                    <table className="columns_header">
                        <tbody>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Position</th>
                                <th>Department</th>
                                <th>Comments</th>
                            </tr>
                            {users.map((user, id) =>
                                < tr key={id}>
                                    <td> <img src={user.photo} alt="vector1black" />{}</td>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.position}</td>
                                    <td>{user.department}</td>
                                    <td>{user.comments}</td>
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