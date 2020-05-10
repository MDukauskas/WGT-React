import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Pagination, Loading, DepartmentItem, Table } from '../../components'
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
                    {departments.length === 0 ? <p>There are no data to show currently. <Link to="/departments/new"> Create new department</Link></p> : ""}

                    {
                        isLoading && <Loading />
                    }

                    {!isLoading &&
                        <Table headers={[
                            'Name',
                        ]} data={currentDepartment} render={(item) => (<DepartmentItem department={item} />)} />
                    }

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