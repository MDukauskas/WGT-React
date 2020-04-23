import React from 'react'
import './index.scss'



export const Pagination = ({ itemsPerPage, totalItems, onPageChange }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return <nav className="pagination">
        <div className="spacer"></div>
        <div className="content-pagination">
            {/* <a href="#">«</a> */}
            {pageNumbers.map(number => (
                <a href="#" key={number} onClick={() => onPageChange(number)}> {number} </a>
            ))}
            {/* <a href="#">»</a> */}
        </div>
    </nav>
}
