import React, { useState } from 'react'
import { InputGroup, Card, Button, Menu } from '../../components'
import './index.scss'
import { Link } from 'react-router-dom'

export const Departments = () => {

    const departments = [
        { id: 1, department: 'dpc', },
        { id: 2, department: 'dpc', },
        { id: 3, department: 'dpc', },
        { id: 4, department: 'dpc', },
        { id: 5, department: 'dpc', },
        { id: 6, department: 'dpc' },
    ]

    return (
        <div className="departments">
            <Menu />
            <div className="content">
                <div className="content_header">
                    <p>Departments</p>
                    <Link to="/departments/new"><Button primary> New department</Button></Link>
                </div>
                <div className="rectangle"><div className="rectangle_orange"></div></div>

                <div className="content_body">
                    <p>Loading...</p>
                    <p>There are no data to show currently. <span className="content_body--orange"> Create new department</span></p>
                    <table className="columns_header">
                        <tbody>
                            <tr>
                                <th>Department name</th>
                            </tr>
                            {departments.map((department, id) =>
                                < tr key={id}>
                                    <td>{department.department}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}