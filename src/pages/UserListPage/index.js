import React, { useState, useEffect } from 'react'
import { Button, Menu, Pagination } from '../../components'
import './index.scss'
// import vector1black from '../../assets/vector1black.svg';
import { Link } from 'react-router-dom'
import { makeRequest } from '../../Services'
import { connect } from 'react-redux'
import { getUsersList, setUsers } from '../../store'


const UserListPageComponent = ({ users, setUsers }) => {

    const [positions, setPositions] = useState([])
    const [departments, setDepartments] = useState([])

    const [loading, setLoadoing] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        setLoadoing(true)
        makeRequest('/user')
            .then(data => {
                setUsers(data)
                setLoadoing(false)
            })
    }, [setUsers])


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

    const indexOfLastUser = currentPage * itemsPerPage
    const indexOfFirstUser = indexOfLastUser - itemsPerPage
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser)

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
                            {currentUser.map((user, id) => {
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
                < Pagination itemsPerPage={itemsPerPage} totalItems={users.length} onPageChange={page => setCurrentPage(page)} currentPage={currentPage} />
            </div>
        </div >
    );
}

const mapStateToProps = (state) => ({
    users: getUsersList(state)
})

const mapDispatchToProps = {
    setUsers
}

export const UserListPage = connect(mapStateToProps, mapDispatchToProps)(UserListPageComponent)