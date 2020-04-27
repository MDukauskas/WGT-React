import React from 'react'
import './index.scss'



export const Pagination = ({ itemsPerPage, totalItems, onPageChange, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    const lastPage = Math.ceil(totalItems / itemsPerPage);

    return <nav className="pagination">
        <div className="spacer"></div>
        <div className="content-pagination">
            <a href="#" onClick={() => onPageChange(1)}>&laquo;</a>
            <a href="#" onClick={() => onPageChange(currentPage === 1 ? 1 : currentPage - 1)}>&lt;</a>

            {pageNumbers.map(number => (
                <a href="#" key={number} onClick={() => onPageChange(number)} className={number === currentPage ? 'active' : ''}> {number} </a>
            ))}
            <a href="#" onClick={() => onPageChange(currentPage === lastPage ? lastPage : currentPage + 1)}>&gt;</a>
            <a href="#" onClick={() => onPageChange(lastPage)}>&raquo;</a>
        </div>
    </nav >
}
