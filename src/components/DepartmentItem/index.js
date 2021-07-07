import React from 'react'
import { Link } from 'react-router-dom'

export const DepartmentItem = ({ department }) => {

    return (< tr key={department.id}>
        <td><Link to={`/departments/${department.id}`}>{department.name}</Link></td>
    </tr>)
}
