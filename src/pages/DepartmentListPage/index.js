import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from '../../components'
import './index.scss'
import { makeRequest } from '../../Services'

export const DepartmentListPage = () => {
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        makeRequest('/department')
            .then(data => {
                setDepartments(data)
            })
    }, [])


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
                        <thead>
                            <tr>
                                <th align="left">Department name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((department, id) =>
                                < tr key={id}>
                                    <td align="left"><Link to={`/departments/${department.id}`}>{department.name}</Link></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}