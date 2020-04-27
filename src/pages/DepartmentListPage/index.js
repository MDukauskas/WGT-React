import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Pagination } from '../../components'
import './index.scss'
import { makeRequest } from '../../Services'
import { connect } from 'react-redux'
import { getDepartmentsList, setDepartments } from '../../store'

const DepartmentListPageComponent = ({ departments, setDepartments }) => {

    const [loading, setLoadoing] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        setLoadoing(true)
        makeRequest('/department')
            .then(data => {
                setDepartments(data)
                setLoadoing(false)
            })
    }, [setDepartments])

    const indexOfLastUser = currentPage * itemsPerPage
    const indexOfFirstUser = indexOfLastUser - itemsPerPage
    const currentDepartment = departments.slice(indexOfFirstUser, indexOfLastUser)

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
                            {currentDepartment.map((department, id) =>
                                < tr key={id}>
                                    <td align="left"><Link to={`/departments/${department.id}`}>{department.name}</Link></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
                < Pagination itemsPerPage={itemsPerPage} totalItems={departments.length} onPageChange={page => setCurrentPage(page)} currentPage={currentPage} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    departments: getDepartmentsList(state)
})

const mapDispatchToProps = {
    setDepartments
}

export const DepartmentListPage = connect(mapStateToProps, mapDispatchToProps)(DepartmentListPageComponent)