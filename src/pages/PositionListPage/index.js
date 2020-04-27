import React, { useState, useEffect } from 'react'
import { Button, Menu, Pagination } from '../../components'
import './index.scss'
import { Link } from 'react-router-dom'
import { makeRequest } from '../../Services'
import { connect } from 'react-redux'
import { getPositionsList, setPositions } from '../../store'

const PositionListPageComponent = ({ positions, setPositions }) => {

    const [loading, setLoadoing] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        setLoadoing(true)
        makeRequest('/position')
            .then(data => {
                setPositions(data)
                setLoadoing(false)
            })
    }, [setPositions])

    const indexOfLastUser = currentPage * itemsPerPage
    const indexOfFirstUser = indexOfLastUser - itemsPerPage
    const currentPosition = positions.slice(indexOfFirstUser, indexOfLastUser)

    return (
        <div className="positions">
            <Menu />
            <div className="content">
                <div className="content_header">
                    <p>Positions</p>
                    <Link to="/positions/new"><Button primary> New position</Button></Link>
                </div>
                <div className="rectangle"><div className="rectangle_orange"></div></div>

                <div className="content_body">
                    <p>Loading...</p>
                    <p>There are no data to show currently. <span className="content_body--orange"> Create new department</span></p>
                    <table className="columns_header">
                        <thead>
                            <tr>
                                <th align="left">Position name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPosition.map((position, id) =>
                                < tr key={id}>
                                    <td align="left"><Link to={`/positions/${position.id}`}>{position.name}</Link></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
                < Pagination itemsPerPage={itemsPerPage} totalItems={positions.length} onPageChange={page => setCurrentPage(page)} currentPage={currentPage} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    positions: getPositionsList(state)
})

const mapDispatchToProps = {
    setPositions
}

export const PositionListPage = connect(mapStateToProps, mapDispatchToProps)(PositionListPageComponent)