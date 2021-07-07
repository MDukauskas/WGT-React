import React from 'react'
import { Link } from 'react-router-dom'

export const PositionItem = ({ position }) => {

    return (< tr key={position.id}>
        <td><Link to={`/positions/${position.id}`}>{position.name}</Link></td>
    </tr>)
}
