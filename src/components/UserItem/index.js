import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPositionsList, getDepartmentsList } from '../../store'

const UserItemComponent = ({ user, positions, departments }) => {
    const position = positions.find(position => +position.id === +user.positionId)
    const department = departments.find(department => +department.id === +user.departmentId)
    return (<tr>
        <td> <img src={user.photo} alt="vector1black" />{}</td>
        <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
        <td>{user.surname}</td>
        <td>{position && position.name}</td>
        <td>{department && department.name}</td>
        <td>{user.comment}</td>
    </tr>)
}

const mapStateToProps = (state) => ({
    positions: getPositionsList(state),
    departments: getDepartmentsList(state),
})

export const UserItem = connect(mapStateToProps)(UserItemComponent)
