import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Pagination, Loading } from '../../components'
import './index.scss'
import { connect } from 'react-redux'
import { getDepartmentsList, getDepartmentsLoading, fetchDepartments } from '../../store'

const DepartmentListPageComponent = ({ departments, fetchDepartments, isLoading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        fetchDepartments()
    }, [])

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

                <div className="content_body">
                    {
                        isLoading && <Loading />
                    }
                    <p>There are no data to show currently. <span className="content_body--orange"> Create new department</span></p>

                    {!isLoading && <table className="columns_header">
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
                    </table>}
                </div>
                < Pagination itemsPerPage={itemsPerPage} totalItems={departments.length} onPageChange={page => setCurrentPage(page)} currentPage={currentPage} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    departments: getDepartmentsList(state),
    isLoading: getDepartmentsLoading(state)
})

const mapDispatchToProps = {
    fetchDepartments,
}

export const DepartmentListPage = connect(mapStateToProps, mapDispatchToProps)(DepartmentListPageComponent)