import React, { useEffect } from 'react'
import { Button, Menu } from '../../components'
import './index.scss'
import { Link } from 'react-router-dom'
import { makeRequest } from '../../Services'
import { connect } from 'react-redux'
import { getPositionsList, setPositions } from '../../store'

const PositionListPageComponent = ({ positions, setPositions }) => {

    useEffect(() => {
        makeRequest('/position')
            .then(data => {
                setPositions(data)
            })
    })

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
                            {positions.map((position, id) =>
                                < tr key={id}>
                                    <td align="left"><Link to={`/positions/${position.id}`}>{position.name}</Link></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
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