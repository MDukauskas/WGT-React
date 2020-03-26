import React, { useState, useEffect } from 'react'
import { Button, Menu } from '../../components'
import './index.scss'
import { Link } from 'react-router-dom'

export const Departments = () => {
    const [departments, setDepartments] = useState([])

    useEffect(() => {
        const authKey = localStorage.getItem('auth_key')
        fetch('http://localhost:3002/api/department', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authKey}`
            }
        }).then((response) => {
            if (!response.ok) { throw response }
            return response.json()
        }).then(data => {
            setDepartments(data)
        }).catch(error => {
            if (error.status === 401) {
                window.location.href = '/'
            } else {
                console.error(error)
            }
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