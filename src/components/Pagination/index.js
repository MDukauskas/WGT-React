import React from 'react'
import './index.scss'



export const Pagination = ({ usersPerPage, totalUsers, onPageChange }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return <nav className="pagination">
        <div className="spacer"></div>
        <div className="content-pagination">
            {pageNumbers.map(number => (
                <a href="#" key={number} onClick={() => onPageChange(number)}> {number} </a>
            ))}
        </div>
    </nav>
}
