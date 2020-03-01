import React, { useState } from 'react'
import { InputGroup, Card, Button, Menu, Tabs } from '../../components'
import './index.scss'

import save from '../../save.svg';
import loading from '../../loading.svg';
import vector1black from '../../vector1black.svg';

export const DepartmentSolution = () => {

    const content1 = <div className="departmentSolution_content">
        <InputGroup label="Department name" type="text" />
        <div className="departmentSolution_content-button">
            <Button primary> <img src={save} alt="save" /> Save</Button>
            <Button> Cancel</Button>
        </div>
    </div>

    const users = [
        { id: 1, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 2, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 3, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 4, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 5, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
        { id: 6, photo: vector1black, name: 'Ieva', surname: 'Kavaliauskiene', position: 'Senior sales operation specialist', department: 'dpc', comments: "no info" },
    ]

    const content2 = <div className="userside1">
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

    return (
        <div className="departmentSolution">
            <Menu />
            <div className="departmentSolution_menu">
                <div className="departmentSolution_header">
                    <h2>Solutions</h2>
                    <Button><img src={loading} className="loading" alt="loading" /> Delete Department</Button>
                </div>
                <Tabs tabs={[{
                    title: 'General information',
                    content: content1,
                }, {
                    title: 'Users',
                    content: content2,
                }]}
                />
            </div>
        </div>
    )
}